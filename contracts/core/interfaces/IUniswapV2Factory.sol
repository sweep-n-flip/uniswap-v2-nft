// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.9;

interface IUniswapV2Factory {
    event PairCreated(address indexed token0, address indexed token1, address pair, uint);
    event WrapperCreated(address indexed collection, address wrapper, uint);

    function feeTo() external view returns (address);
    function feeToSetter() external view returns (address);

    function getPair(address tokenA, address tokenB) external view returns (address pair);
    function allPairs(uint) external view returns (address pair);
    function allPairsLength() external view returns (uint);

    function getCollection(address wrapper) external view returns (address collection);
    function getWrapper(address collection) external view returns (address wrapper);
    function allWrappers(uint) external view returns (address wrapper);
    function allWrappersLength() external view returns (uint);

    function delegates(address token0, address token1) external view returns (bool);

    function router(address router) external view returns (bool);
    function routerSetter() external view returns (address);

    function createPair(address tokenA, address tokenB) external returns (address pair);

    function createWrapper(address collection) external returns (address wrapper);

    function setFeeTo(address) external;
    function setFeeToSetter(address) external;

    function setRouter(address, bool) external;
    function setRouterSetter(address) external;
}

interface IUniswapV2FactoryExt is IUniswapV2Factory {
    function pairCodeHash() external view returns (bytes32 _pairCodeHash); // sushiswap extension
    function INIT_CODE_PAIR_HASH() external view returns (bytes32 _INIT_CODE_PAIR_HASH); // pancakeswap extension
    function getPair(address tokenA, address tokenB, bool stable) external view returns (address pair); // velodrome extension
    function createPair(address tokenA, address tokenB, bool stable) external returns (address pair); // velodrome extension
}
