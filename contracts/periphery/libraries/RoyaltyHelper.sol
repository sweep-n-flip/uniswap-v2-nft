// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.9;

import { IERC165 } from "../interfaces/IERC165.sol";
import { IERC2981 } from "../interfaces/IERC2981.sol";

library RoyaltyHelper {
    bytes4 constant IERC2981_INTERFACE_ID = 0x2a55205a;

    function getRoyaltyInfo(address collection, uint[] memory tokenIds, uint totalAmount) internal view returns (address[] memory royaltyReceivers, uint[] memory royaltyAmounts, uint totalRoyaltyAmount) {
        bool implementsIERC2981;
        try IERC165(collection).supportsInterface(IERC2981_INTERFACE_ID) returns (bool result) { implementsIERC2981 = result; } catch { implementsIERC2981 = false; }
        if (!implementsIERC2981) return (new address[](0), new uint[](0), 0);
        royaltyReceivers = new address[](tokenIds.length);
        royaltyAmounts = new uint[](tokenIds.length);
        totalRoyaltyAmount = 0;
        uint salePrice = totalAmount / tokenIds.length;
        for (uint i = 0; i < tokenIds.length; i++) {
            (royaltyReceivers[i], royaltyAmounts[i]) = IERC2981(collection).royaltyInfo(tokenIds[i], salePrice);
            totalRoyaltyAmount += royaltyAmounts[i];
        }
        return (royaltyReceivers, royaltyAmounts, totalRoyaltyAmount);
    }
}
