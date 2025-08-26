// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "erc721a/contracts/extensions/ERC721AQueryable.sol";
import "erc721a/contracts/extensions/ERC721ABurnable.sol";
import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GenesisHLOgs is ERC721AQueryable, ERC721ABurnable, Ownable {
    constructor() ERC721A("GenesisHLOgs", "GHLOG") Ownable(msg.sender) {}

    uint public publicSalesTimestamp = 1731825612;
    uint public endSalesTimestamp = 1734417612;
    uint public mintPrice = 1 ether; //INITIAL PRICE - HYPE
    uint public maxMintPerAccount = 1000;

    mapping(address => uint) private _totalMintPerAccount;
    string private _contractUri;
    string private _baseUri;

    function mint(uint amount) external payable {
        require(isPublicSalesActive(), "sales is not active");
        require(!isSalesEnded(), "sales has ended");
        require(amount > 0, "invalid amount");
        require(amount <= maxMintPerAccount, "max tokens per tx reached");
        require(msg.value >= amount * mintPrice, "invalid mint price");

        require(
            amount + _totalMintPerAccount[msg.sender] <= maxMintPerAccount,
            "max tokens per account reached"
        );

        _totalMintPerAccount[msg.sender] += amount;
        _safeMint(msg.sender, amount);
    }

    function ownerMint(address to, uint amount) external onlyOwner {
        require(amount > 0, "invalid amount");
        _safeMint(to, amount);
    }

    function isPublicSalesActive() public view returns (bool) {
        return publicSalesTimestamp <= block.timestamp;
    }

    function isSalesEnded() public view returns (bool) {
        return endSalesTimestamp <= block.timestamp;
    }

    function totalMintPerAccount(address account) public view returns (uint) {
        return _totalMintPerAccount[account];
    }

    function contractURI() external view returns (string memory) {
        return _contractUri;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseUri;
    }

    function setContractURI(string memory contractURI_) external onlyOwner {
        _contractUri = contractURI_;
    }

    function setBaseURI(string memory baseURI_) external onlyOwner {
        _baseUri = baseURI_;
    }

    function setMintPrice(uint mintPrice_) external onlyOwner {
        mintPrice = mintPrice_;
    }

    function setMaxMintPerAccount(uint maxMintPerAccount_) external onlyOwner {
        maxMintPerAccount = maxMintPerAccount_;
    }

    function setPublicSalesTimestamp(uint timestamp) external onlyOwner {
        publicSalesTimestamp = timestamp;
    }

    function setEndSalesTimestamp(uint timestamp) external onlyOwner {
        endSalesTimestamp = timestamp;
    }

    function withdrawAll() external onlyOwner {
        require(payable(msg.sender).send(address(this).balance));
    }
}
