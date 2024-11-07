import { EvmBatchProcessor } from '@subsquid/evm-processor'
import { lookupArchive } from '@subsquid/archive-registry'
import { events as factoryEvents } from './abi/IUniswapV2Factory'
import { events as pairEvents } from './abi/IUniswapV2Pair'
import { events as wrapperEvents } from './abi/IWERC721'
import fs from "fs";
import path from "path";
import * as net from "node:net";

export const networkConfig = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, `../config/${process.env.NETWORK}.json`),
    'utf-8'
  )
);

export const FACTORY_ADDRESS = networkConfig.contractAddress.factory.toLowerCase()
export const ROUTER_ADDRESS = networkConfig.contractAddress.router.toLowerCase()


export const processor = new EvmBatchProcessor()
  .setGateway(networkConfig.gatewayUrl)
  .setRpcEndpoint(networkConfig.rpcUrl)
  .setBlockRange({
    from: networkConfig.fromBlock
  })
  .addLog({
    address: [FACTORY_ADDRESS],
    topic0: [
      factoryEvents.PairCreated.topic,
      factoryEvents.WrapperCreated.topic
    ]
  })
  .addLog({
    address: [ROUTER_ADDRESS],
    topic0: [
      pairEvents.Swap.topic,
      pairEvents.Sync.topic,
      wrapperEvents.Mint.topic,
      wrapperEvents.Burn.topic
    ]
  })
  .setFinalityConfirmation(networkConfig.finalityConfirmation)

export type ProcessorContext<Store> = {
  blocks: any,
  store: Store
}