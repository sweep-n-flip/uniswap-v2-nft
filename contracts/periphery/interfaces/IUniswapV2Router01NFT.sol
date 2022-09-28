// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.9;

import { IUniswapV2Router01 } from "./IUniswapV2Router01.sol";

interface IUniswapV2Router01NFT is IUniswapV2Router01 {
    function addLiquidity(
        address tokenA,
        address collectionB,
        uint amountADesired,
        uint[] memory tokenIdsB,
        uint amountAMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB, uint liquidity);
    function addLiquidityETH(
        address collection,
        uint[] memory tokenIds,
        uint amountETHMin,
        address to,
        uint deadline
    ) external payable returns (uint amountToken, uint amountETH, uint liquidity);
    function removeLiquidity(
        address tokenA,
        address collectionB,
        uint liquidity,
        uint[] memory tokenIdsB,
        uint amountAMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB);
    function removeLiquidityETH(
        address collection,
        uint liquidity,
        uint[] memory tokenIds,
        uint amountETHMin,
        address to,
        uint deadline
    ) external returns (uint amountToken, uint amountETH);
    function swapExactTokensForTokens(
        uint[] memory tokenIdsIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
    function swapTokensForExactTokens(
        uint[] memory tokenIdsOut,
        uint amountInMax,
        address[] memory path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
    function swapExactTokensForETH(uint[] memory tokenIdsIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
        external
        returns (uint[] memory amounts);
    function swapETHForExactTokens(uint[] memory tokenIdsOut, address[] memory path, address to, uint deadline)
        external
        payable
        returns (uint[] memory amounts);
}
