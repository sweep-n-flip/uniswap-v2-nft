import { Address, BigInt, BigDecimal } from '@graphprotocol/graph-ts';

import { Collection, Currency, Pair, PairDay } from '../types/schema';
import { Pair as PairTemplate, Wrapper as WrapperTemplate } from '../types/templates';
import { PairCreated as PairCreatedEvent, WrapperCreated as WrapperCreatedEvent } from '../types/Factory/IUniswapV2Factory';
import { Swap as SwapEvent, Sync as SyncEvent } from '../types/templates/Pair/IUniswapV2Pair';
import { Mint as MintEvent, Burn as BurnEvent } from '../types/templates/Wrapper/IWERC721';
import { IERC20 } from '../types/Factory/IERC20';
import { IERC721 } from '../types/Factory/IERC721';

let ZERO_BIGINT = BigInt.fromI32(0);
let ZERO_BIGDECIMAL = ZERO_BIGINT.toBigDecimal();
let ZERO_ADDRESS = Address.fromString('0x0000000000000000000000000000000000000000');

function coins(amount: BigInt, decimals: i32): BigDecimal {
  if (decimals > 0) {
    let scale = BigInt.fromI32(10).pow(decimals as u8).toBigDecimal();
    return amount.toBigDecimal().div(scale);
  }
  if (decimals < 0) {
    let scale = BigInt.fromI32(10).pow((-decimals) as u8).toBigDecimal();
    return amount.toBigDecimal().times(scale);
  }
  return amount.toBigDecimal();
}

function registerCollection(address: Address, wrapper: Currency): Collection {
  let collectionId = address.toHexString();
  let collection = Collection.load(collectionId);
  if (collection == null) {
    let contract = IERC721.bind(address);
    let name = contract.try_name();
    let symbol = contract.try_symbol();
    collection = new Collection(collectionId);
    collection.name = name.reverted ? null : name.value;
    collection.symbol = symbol.reverted ? null : symbol.value;
    collection.wrapper = wrapper.id;
    collection.save();
  }
  return collection as Collection;
}

function registerCurrency(address: Address): Currency {
  let currencyId = address.toHexString();
  let currency = Currency.load(currencyId);
  if (currency == null) {
    let contract = IERC20.bind(address);
    let name = contract.try_name();
    let symbol = contract.try_symbol();
    let decimals = contract.try_decimals();
    currency = new Currency(currencyId);
    currency.name = name.reverted ? null : name.value;
    currency.symbol = symbol.reverted ? null : symbol.value;
    currency.decimals = decimals.reverted ? 0 : decimals.value;
    currency.wrapping = false;
    currency.collection = null;
    currency.tokenIds = null;
    currency.save();
  }
  return currency as Currency;
}

function registerPair(address: Address, token0: Currency, token1: Currency): Pair {
  let pairId = address.toHexString();
  let pair = Pair.load(pairId);
  if (pair == null) {
    pair = new Pair(pairId);
    pair.token0 = token0.id;
    pair.token1 = token1.id;
    pair.discrete0 = token0.wrapping;
    pair.discrete1 = token1.wrapping;
    pair.reserve0 = ZERO_BIGDECIMAL;
    pair.reserve1 = ZERO_BIGDECIMAL;
    pair.totalSupply = ZERO_BIGDECIMAL;
    pair.save();
  }
  return pair as Pair;
}

function updateCurrencyAsWrapper(wrapper: Currency, collection: Collection): void {
  wrapper.wrapping = true;
  wrapper.collection = collection.id;
  wrapper.tokenIds = [];
  wrapper.save();
}

function updateDailyVolume(address: Address, timestamp: BigInt, volume0: BigInt, volume1: BigInt): void {
  let pairId = address.toHexString();
  let pair = Pair.load(pairId);
  let token0 = Currency.load(pair.token0);
  let token1 = Currency.load(pair.token1);
  let DAY = 24 * 60 * 60;
  let day = (timestamp.toI32() / DAY) * DAY;
  let pairDayId = pairId.concat(':').concat(day.toString());
  let pairDay = PairDay.load(pairDayId);
  if (pairDay == null) {
    pairDay.pair = pairId;
    pairDay.day = day;
    pairDay.volume0 = ZERO_BIGDECIMAL;
    pairDay.volume1 = ZERO_BIGDECIMAL;
  }
  pairDay.volume0 = pairDay.volume0 + coins(volume0, token0.decimals);
  pairDay.volume1 = pairDay.volume1 + coins(volume1, token1.decimals);
  pairDay.save();
}

function updatePairState(address: Address, reserve0: BigInt, reserve1: BigInt): void {
  let contract = IERC20.bind(address);
  let totalSupply = contract.try_totalSupply();
  let pairId = address.toHexString();
  let pair = Pair.load(pairId);
  let token0 = Currency.load(pair.token0);
  let token1 = Currency.load(pair.token1);
  pair.reserve0 = coins(reserve0, token0.decimals);
  pair.reserve1 = coins(reserve1, token1.decimals);
  if (!totalSupply.reverted) {
    pair.totalSupply = coins(totalSupply.value, 18);
  }
  pair.save();
}

function insertWrapperItems(address: Address, items: BigInt[]): void {
  let currencyId = address.toHexString();
  let currency = Currency.load(currencyId);
  let list = currency.tokenIds;
  for (let i = 0; i < items.length; i++) {
    let index = list.indexOf(items[i]);
    if (index < 0) {
      list.push(items[i]);
    }
  }
  currency.tokenIds = list;
  currency.save();
}

function removeWrapperItems(address: Address, items: BigInt[]): void {
  let currencyId = address.toHexString();
  let currency = Currency.load(currencyId);
  let list = currency.tokenIds;
  for (let i = 0; i < items.length; i++) {
    let index = list.indexOf(items[i]);
    if (index >= 0) {
      list.splice(index, 1);
    }
  }
  currency.tokenIds = list;
  currency.save();
}

export function handlePairCreated(event: PairCreatedEvent): void {
  let token0 = registerCurrency(event.params.token0);
  let token1 = registerCurrency(event.params.token1);
  registerPair(event.params.pair, token0, token1);
  PairTemplate.create(event.params.pair);
}

export function handleWrapperCreated(event: WrapperCreatedEvent): void {
  let wrapper = registerCurrency(event.params.wrapper);
  let collection = registerCollection(event.params.collection, wrapper);
  updateCurrencyAsWrapper(wrapper, collection);
  WrapperTemplate.create(event.params.wrapper);
}

export function handleSwap(event: SwapEvent): void {
  let volume0 = event.params.amount0In > event.params.amount0Out ? event.params.amount0In - event.params.amount0Out : event.params.amount0Out - event.params.amount0In;
  let volume1 = event.params.amount1In > event.params.amount1Out ? event.params.amount1In - event.params.amount1Out : event.params.amount1Out - event.params.amount1In;
  updateDailyVolume(event.address, event.block.timestamp, volume0, volume1);
}

export function handleSync(event: SyncEvent): void {
  updatePairState(event.address, event.params.reserve0, event.params.reserve1);
}

export function handleMint(event: MintEvent): void {
  insertWrapperItems(event.address, event.params.tokenIds);
}

export function handleBurn(event: BurnEvent): void {
  removeWrapperItems(event.address, event.params.tokenIds);
}
