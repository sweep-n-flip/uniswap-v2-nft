import { TypeormDatabase, Store } from '@subsquid/typeorm-store'
import {networkConfig, processor} from './processor'
import { Collection, Counter, Currency, Pair, PairDay, PairMonth, Swap } from './model'
import { BigDecimal } from '@subsquid/big-decimal'
import { events as factoryEvents } from './abi/IUniswapV2Factory'
import { events as pairEvents } from './abi/IUniswapV2Pair'
import { events as wrapperEvents } from './abi/IWERC721'

// Contract interfaces
export const IUniswapV2Factory = factoryEvents
export const IUniswapV2Pair = pairEvents
export const IWERC721 = wrapperEvents

// Constants
const ZERO_BI = 0n
const ZERO_BD = BigDecimal(0)
const FACTORY_ADDRESS = networkConfig.contractAddress.factory.toLowerCase()

// Helper function to convert hex string to Uint8Array
function hexStringToUint8Array(hex: string): Uint8Array {
  hex = hex.startsWith('0x') ? hex.slice(2) : hex
  const length = hex.length / 2
  const uint8Array = new Uint8Array(length)
  for (let i = 0; i < length; i++) {
    uint8Array[i] = parseInt(hex.substr(i * 2, 2), 16)
  }
  return uint8Array
}

// Helper functions for tokenIds handling
function serializeTokenIds(tokenIds: bigint[]): string {
  return JSON.stringify(tokenIds.map(id => id.toString()))
}

function deserializeTokenIds(tokenIdsStr: string | null): bigint[] {
  if (!tokenIdsStr) return []
  return JSON.parse(tokenIdsStr).map((id: string) => BigInt(id))
}

function addTokenId(tokenIdsStr: string | null, newId: bigint): string {
  const tokenIds = deserializeTokenIds(tokenIdsStr)
  if (!tokenIds.includes(newId)) {
    tokenIds.push(newId)
  }
  return serializeTokenIds(tokenIds)
}

function removeTokenId(tokenIdsStr: string | null, idToRemove: bigint): string {
  const tokenIds = deserializeTokenIds(tokenIdsStr)
  const index = tokenIds.indexOf(idToRemove)
  if (index >= 0) {
    tokenIds.splice(index, 1)
  }
  return serializeTokenIds(tokenIds)
}

function toDecimal(amount: bigint | number, decimals: number): BigDecimal {
  return BigDecimal(amount.toString()).div(BigDecimal(10).pow(decimals))
}

async function getOrCreateCounter(store: Store, id: string): Promise<Counter> {
  let counter = await store.get(Counter, id)
  if (!counter) {
    counter = new Counter({
      id,
      value: ZERO_BI
    })
  }
  return counter
}

processor.run(new TypeormDatabase(), async (ctx) => {
  // Initialize storage maps
  const currencies: Map<string, Currency> = new Map()
  const collections: Map<string, Collection> = new Map()
  const pairs: Map<string, Pair> = new Map()
  const pairDays: Map<string, PairDay> = new Map()
  const pairMonths: Map<string, PairMonth> = new Map()
  const swaps: Swap[] = []

  for (let block of ctx.blocks) {
    for (let log of block.logs) {
      // Handle Factory Events
      if (log.address === FACTORY_ADDRESS) {
        ctx.log.warn(`Factory event: ${log.topics[0]}`)
        ctx.log.warn(`Block: ${block.header.height}`)
        if (log.topics[0] === factoryEvents.PairCreated.topic) {
          const { token0, token1, pair } = factoryEvents.PairCreated.decode(log)

          let token0Currency = await ctx.store.get(Currency, token0.toLowerCase())
          let token1Currency = await ctx.store.get(Currency, token1.toLowerCase())

          if (!token0Currency) {
            ctx.log.error(`Token0 not found: ${token0}`)
          }

          if (!token1Currency) {
            ctx.log.error(`Token1 not found: ${token1}`)
          }

          if (token0Currency && token1Currency) {
            const newPair = new Pair({
              id: pair.toLowerCase(),
              token0: token0Currency,
              token1: token1Currency,
              discrete0: token0Currency.wrapping,
              discrete1: token1Currency.wrapping,
              reserve0: ZERO_BD,
              reserve1: ZERO_BD,
              totalSupply: ZERO_BD
            })
            ctx.log.trace(`New pair created: ${newPair.id}`)

            pairs.set(newPair.id, newPair)
          }
        }

        if (log.topics[0] === factoryEvents.WrapperCreated.topic) {
          const { collection: collectionAddr, wrapper: wrapperAddr } = factoryEvents.WrapperCreated.decode(log)

          const wrapperCurrency = new Currency({
            id: wrapperAddr.toLowerCase(),
            name: null,
            symbol: null,
            decimals: 18,
            wrapping: true,
            tokenIds: '[]',
            collection: null
          })

          currencies.set(wrapperCurrency.id, wrapperCurrency)

          const collection = new Collection({
            id: collectionAddr.toLowerCase(),
            name: null,
            symbol: null,
            wrapper: wrapperCurrency
          })

          collections.set(collection.id, collection)
          wrapperCurrency.collection = collection
        }
      }

      // Handle Pair Events
      if (log.topics[0] === pairEvents.Swap.topic) {
        const { amount0In, amount0Out, amount1In, amount1Out } = pairEvents.Swap.decode(log)
        const pairId = log.address.toLowerCase()
        const pair = await ctx.store.get(Pair, pairId)

        if (pair && log.transaction) {
          const volume0 = amount0In > amount0Out ? amount0In - amount0Out : amount0Out - amount0In
          const volume1 = amount1In > amount1Out ? amount1In - amount1Out : amount1Out - amount1In

          const counter = await getOrCreateCounter(ctx.store, 'SwapCount')
          counter.value = counter.value + 1n

          const swap = new Swap({
            id: counter.value.toString(),
            txId: hexStringToUint8Array(log.transaction.hash),
            origin: hexStringToUint8Array(log.transaction.from),
            pair: pair,
            type: amount0In > amount0Out ? 'SELL0_BUY1' : 'BUY0_SELL1',
            volume0: toDecimal(volume0, pair.token0.decimals),
            volume1: toDecimal(volume1, pair.token1.decimals),
            timestamp: block.header.timestamp
          })

          swaps.push(swap)
          await ctx.store.save(counter)

          const day = Math.floor(block.header.timestamp / 86400) * 86400
          const pairDayId = `${pair.id}-${day}`

          let pairDay = pairDays.get(pairDayId) || await ctx.store.get(PairDay, pairDayId)
          if (!pairDay) {
            pairDay = new PairDay({
              id: pairDayId,
              pair: pair,
              day,
              volume0: ZERO_BD,
              volume1: ZERO_BD,
              reserve0: pair.reserve0,
              reserve1: pair.reserve1,
              totalSupply: pair.totalSupply
            })
          }

          pairDay.volume0 = pairDay.volume0.add(toDecimal(volume0, pair.token0.decimals))
          pairDay.volume1 = pairDay.volume1.add(toDecimal(volume1, pair.token1.decimals))
          pairDays.set(pairDayId, pairDay)
        }
      }

      if (log.topics[0] === pairEvents.Sync.topic) {
        const { reserve0, reserve1 } = pairEvents.Sync.decode(log)
        const pairId = log.address.toLowerCase()
        const pair = await ctx.store.get(Pair, pairId)

        if (pair) {
          pair.reserve0 = toDecimal(reserve0, pair.token0.decimals)
          pair.reserve1 = toDecimal(reserve1, pair.token1.decimals)
          pairs.set(pair.id, pair)
        }
      }

      // Handle Wrapper Events
      if (log.topics[0] === wrapperEvents.Mint.topic) {
        const { tokenIds } = wrapperEvents.Mint.decode(log)
        const wrapperId = log.address.toLowerCase()
        let wrapper = await ctx.store.get(Currency, wrapperId)

        if (wrapper) {
          let updatedTokenIds = wrapper.tokenIds || '[]'
          for (const tokenId of tokenIds) {
            updatedTokenIds = addTokenId(updatedTokenIds, tokenId)
          }
          wrapper.tokenIds = updatedTokenIds
          currencies.set(wrapper.id, wrapper)
        }
      }

      if (log.topics[0] === wrapperEvents.Burn.topic) {
        const { tokenIds } = wrapperEvents.Burn.decode(log)
        const wrapperId = log.address.toLowerCase()
        let wrapper = await ctx.store.get(Currency, wrapperId)

        if (wrapper) {
          let updatedTokenIds = wrapper.tokenIds || '[]'
          for (const tokenId of tokenIds) {
            updatedTokenIds = removeTokenId(updatedTokenIds, tokenId)
          }
          wrapper.tokenIds = updatedTokenIds
          currencies.set(wrapper.id, wrapper)
        }
      }
    }
  }

  ctx.log.warn(`Saving ${JSON.stringify(currencies.values().next().value.toString(), null, 4)} currencies`)
  ctx.log.warn(`Saving ${collections.size} collections`)
  ctx.log.warn(`Saving ${pairs.size} pairs`)
  ctx.log.warn(`Saving ${pairDays.size} pair days`)
  // Save all accumulated entities
  await ctx.store.save([...currencies.values()])
  await ctx.store.save([...collections.values()])
  await ctx.store.save([...pairs.values()])
  await ctx.store.save([...pairDays.values()])
  await ctx.store.save(swaps)
})