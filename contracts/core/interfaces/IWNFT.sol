// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.9;

import { IERC20 } from "./IERC20.sol";

interface IWNFT is IERC20 {
    event Mint(address indexed sender, uint[] tokenIds);
    event Burn(address indexed sender, uint[] tokenIds);

    function factory() external view returns (address);
    function collection() external view returns (address);

    function mint(uint[] memory tokenIds) external;
    function burn(uint[] memory tokenIds) external;

    function initialize(address) external;
}
