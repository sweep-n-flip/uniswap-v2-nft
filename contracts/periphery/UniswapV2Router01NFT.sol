// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.9;

import { IUniswapV2Factory } from "../core/interfaces/IUniswapV2Factory.sol";
import { IUniswapV2Pair } from "../core/interfaces/IUniswapV2Pair.sol";
import { IERC721 } from "../core/interfaces/IERC721.sol";
import { IWNFT } from "../core/interfaces/IWNFT.sol";
import { TransferHelper } from "../lib/libraries/TransferHelper.sol";

import { IUniswapV2Router01NFT } from "./interfaces/IUniswapV2Router01NFT.sol";
import { UniswapV2Router01 } from "./UniswapV2Router01.sol";
import { UniswapV2Library } from "./libraries/UniswapV2Library.sol";
import { RoyaltyHelper } from "./libraries/RoyaltyHelper.sol";
import { IWETH } from "./interfaces/IWETH.sol";

contract UniswapV2Router01NFT is IUniswapV2Router01NFT, UniswapV2Router01 {
    constructor(address _factory, address _WETH) UniswapV2Router01(_factory, _WETH) {
    }

    function _getWrapper(address collection) internal returns (address wrapper) {
        wrapper = IUniswapV2Factory(factory).getWrapper(collection);
        if (wrapper == address(0)) {
            wrapper = IUniswapV2Factory(factory).createWrapper(collection);
            IERC721(collection).setApprovalForAll(wrapper, true);
        }
    }

    function _mint(address wrapper, address to, uint[] memory tokenIds) internal {
        address collection = IWNFT(wrapper).collection();
        for (uint i = 0; i < tokenIds.length; i++) {
            IERC721(collection).transferFrom(msg.sender, address(this), tokenIds[i]);
        }
        IWNFT(wrapper).mint(to, tokenIds);
    }

    // **** ADD LIQUIDITY ****
    function addLiquidityCollection(
        address tokenA,
        address collectionB,
        uint amountADesired,
        uint[] memory tokenIdsB,
        uint amountAMin,
        address to,
        uint deadline
    ) external override ensure(deadline) returns (uint amountA, uint amountB, uint liquidity) {
        address wrapperB = _getWrapper(collectionB);
        uint amountBMin = tokenIdsB.length * 1e18;
        (amountA, amountB) = _addLiquidity(
            tokenA,
            wrapperB,
            amountADesired,
            amountBMin,
            amountAMin,
            amountBMin
        );
        address pair = UniswapV2Library.pairFor(factory, tokenA, wrapperB);
        TransferHelper.safeTransferFrom(tokenA, msg.sender, pair, amountA);
        _mint(wrapperB, pair, tokenIdsB);
        liquidity = IUniswapV2Pair(pair).mint(to);
    }
    function addLiquidityETHCollection(
        address collection,
        uint[] memory tokenIds,
        uint amountETHMin,
        address to,
        uint deadline
    ) external override payable ensure(deadline) returns (uint amountToken, uint amountETH, uint liquidity) {
        address wrapper = _getWrapper(collection);
        uint amountTokenMin = tokenIds.length * 1e18;
        (amountToken, amountETH) = _addLiquidity(
            wrapper,
            WETH,
            amountTokenMin,
            msg.value,
            amountTokenMin,
            amountETHMin
        );
        address pair = UniswapV2Library.pairFor(factory, wrapper, WETH);
        _mint(wrapper, pair, tokenIds);
        IWETH(WETH).deposit{value: amountETH}();
        assert(IWETH(WETH).transfer(pair, amountETH));
        liquidity = IUniswapV2Pair(pair).mint(to);
        if (msg.value > amountETH) TransferHelper.safeTransferETH(msg.sender, msg.value - amountETH); // refund dust eth, if any
    }

    // **** REMOVE LIQUIDITY ****
    function removeLiquidityCollection(
        address tokenA,
        address collectionB,
        uint liquidity,
        uint[] memory tokenIdsB,
        uint amountAMin,
        address to,
        uint deadline
    ) public override ensure(deadline) returns (uint amountA, uint amountB) {
        address wrapperB = _getWrapper(collectionB);
        uint amountBMin = tokenIdsB.length * 1e18;
        (amountA, amountB) = removeLiquidity(
            tokenA,
            wrapperB,
            liquidity,
            amountAMin,
            amountBMin,
            address(this),
            deadline
        );
        TransferHelper.safeTransfer(tokenA, to, amountA);
        IWNFT(wrapperB).burn(to, tokenIdsB);
    }
    function removeLiquidityETHCollection(
        address collection,
        uint liquidity,
        uint[] memory tokenIds,
        uint amountETHMin,
        address to,
        uint deadline
    ) public override ensure(deadline) returns (uint amountToken, uint amountETH) {
        address wrapper = _getWrapper(collection);
        uint amountTokenMin = tokenIds.length * 1e18;
        (amountToken, amountETH) = removeLiquidity(
            wrapper,
            WETH,
            liquidity,
            amountTokenMin,
            amountETHMin,
            address(this),
            deadline
        );
        IWNFT(wrapper).burn(to, tokenIds);
        IWETH(WETH).withdraw(amountETH);
        TransferHelper.safeTransferETH(to, amountETH);
    }
/*
    function removeLiquidityWithPermitCollection(
        address tokenA,
        address collectionB,
        uint liquidity,
        uint[] memory tokenIdsB,
        uint amountAMin,
        address to,
        uint deadline,
        bool approveMax, uint8 v, bytes32 r, bytes32 s
    ) external override returns (uint amountA, uint amountB) {
        address wrapperB = _getWrapper(collectionB);
        address pair = UniswapV2Library.pairFor(factory, tokenA, wrapperB);
        uint value = approveMax ? type(uint).max : liquidity;
        IUniswapV2Pair(pair).permit(msg.sender, address(this), value, deadline, v, r, s);
        (amountA, amountB) = removeLiquidityCollection(tokenA, collectionB, liquidity, tokenIdsB, amountAMin, to, deadline);
    }
    function removeLiquidityETHWithPermitCollection(
        address collection,
        uint liquidity,
        uint[] memory tokenIds,
        uint amountETHMin,
        address to,
        uint deadline,
        bool approveMax, uint8 v, bytes32 r, bytes32 s
    ) external override returns (uint amountToken, uint amountETH) {
        address wrapper = _getWrapper(collection);
        address pair = UniswapV2Library.pairFor(factory, wrapper, WETH);
        uint value = approveMax ? type(uint).max : liquidity;
        IUniswapV2Pair(pair).permit(msg.sender, address(this), value, deadline, v, r, s);
        (amountToken, amountETH) = removeLiquidityETHCollection(collection, liquidity, tokenIds, amountETHMin, to, deadline);
    }
*/
    // **** SWAP ****
    function swapExactTokensForTokensCollection(
        uint[] memory tokenIdsIn,
        uint amountOutMin,
        address[] memory path,
        address to,
        uint deadline
    ) external override ensure(deadline) returns (uint[] memory amounts) {
        address collection = path[0];
        path[0] = _getWrapper(collection);
        amounts = UniswapV2Library.getAmountsOut(factory, tokenIdsIn.length * 1e18, path);
        uint amountOut = amounts[amounts.length - 1];
        (address[] memory royaltyReceivers, uint[] memory royaltyAmounts, uint totalRoyaltyAmount) = RoyaltyHelper.getRoyaltyInfo(collection, tokenIdsIn, amountOut);
        uint netAmountOut = amountOut - totalRoyaltyAmount;
        require(netAmountOut >= amountOutMin, "UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT");
        _mint(path[0], UniswapV2Library.pairFor(factory, path[0], path[1]), tokenIdsIn);
        if (totalRoyaltyAmount == 0) {
            _swap(amounts, path, to);
        } else {
            _swap(amounts, path, address(this));
            address tokenOut = path[path.length - 1];
            TransferHelper.safeTransfer(tokenOut, to, netAmountOut);
            TransferHelper.safeTransferBatch(tokenOut, royaltyReceivers, royaltyAmounts);
        }
    }
    function swapTokensForExactTokensCollection(
        uint[] memory tokenIdsOut,
        uint amountInMax,
        address[] memory path,
        address to,
        uint deadline
    ) external override ensure(deadline) returns (uint[] memory amounts) {
        address collection = path[path.length - 1];
        path[path.length - 1] = _getWrapper(collection);
        amounts = UniswapV2Library.getAmountsIn(factory, tokenIdsOut.length * 1e18, path);
        uint amountIn = amounts[0];
        (address[] memory royaltyReceivers, uint[] memory royaltyAmounts, uint totalRoyaltyAmount) = RoyaltyHelper.getRoyaltyInfo(collection, tokenIdsOut, amountIn);
        require(amountIn + totalRoyaltyAmount <= amountInMax, "UniswapV2Router: EXCESSIVE_INPUT_AMOUNT");
        TransferHelper.safeTransferFrom(path[0], msg.sender, UniswapV2Library.pairFor(factory, path[0], path[1]), amountIn);
        _swap(amounts, path, address(this));
        IWNFT(path[path.length - 1]).burn(to, tokenIdsOut);
        if (totalRoyaltyAmount > 0) {
            TransferHelper.safeTransferFromBatch(path[0], msg.sender, royaltyReceivers, royaltyAmounts);
        }
    }
    function swapExactTokensForETHCollection(uint[] memory tokenIdsIn, uint amountOutMin, address[] memory path, address to, uint deadline)
        external
        override
        ensure(deadline)
        returns (uint[] memory amounts)
    {
        require(path[path.length - 1] == WETH, "UniswapV2Router: INVALID_PATH");
        address collection = path[0];
        path[0] = _getWrapper(collection);
        amounts = UniswapV2Library.getAmountsOut(factory, tokenIdsIn.length * 1e18, path);
        uint amountOut = amounts[amounts.length - 1];
        (address[] memory royaltyReceivers, uint[] memory royaltyAmounts, uint totalRoyaltyAmount) = RoyaltyHelper.getRoyaltyInfo(collection, tokenIdsIn, amountOut);
        uint netAmountOut = amountOut - totalRoyaltyAmount;
        require(netAmountOut >= amountOutMin, "UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT");
        _mint(path[0], UniswapV2Library.pairFor(factory, path[0], path[1]), tokenIdsIn);
        _swap(amounts, path, address(this));
        IWETH(WETH).withdraw(amountOut);
        TransferHelper.safeTransferETH(to, netAmountOut);
        if (totalRoyaltyAmount > 0) {
            TransferHelper.safeTransferETHBatch(royaltyReceivers, royaltyAmounts);
        }
    }
    function swapETHForExactTokensCollection(uint[] memory tokenIdsOut, address[] memory path, address to, uint deadline)
        external
        override
        payable
        ensure(deadline)
        returns (uint[] memory amounts)
    {
        require(path[0] == WETH, "UniswapV2Router: INVALID_PATH");
        address collection = path[path.length - 1];
        path[path.length - 1] = _getWrapper(collection);
        amounts = UniswapV2Library.getAmountsIn(factory, tokenIdsOut.length * 1e18, path);
        uint amountIn = amounts[0];
        (address[] memory royaltyReceivers, uint[] memory royaltyAmounts, uint totalRoyaltyAmount) = RoyaltyHelper.getRoyaltyInfo(collection, tokenIdsOut, amountIn);
        uint grossAmountIn = amountIn + totalRoyaltyAmount;
        require(grossAmountIn <= msg.value, "UniswapV2Router: EXCESSIVE_INPUT_AMOUNT");
        IWETH(WETH).deposit{value: amountIn}();
        assert(IWETH(WETH).transfer(UniswapV2Library.pairFor(factory, path[0], path[1]), amountIn));
        _swap(amounts, path, address(this));
        IWNFT(path[path.length - 1]).burn(to, tokenIdsOut);
        if (totalRoyaltyAmount > 0) {
            TransferHelper.safeTransferETHBatch(royaltyReceivers, royaltyAmounts);
        }
        if (msg.value > grossAmountIn) TransferHelper.safeTransferETH(msg.sender, msg.value - grossAmountIn); // refund dust eth, if any
    }
}
