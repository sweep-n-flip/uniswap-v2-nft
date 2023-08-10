# Uniswap V2 NFT

[![Hardhat CI Actions Status](https://github.com/nftfy/uniswap-v2-nft/workflows/Hardhat%20CI/badge.svg)](https://github.com/nftfy/uniswap-v2-nft/actions)

A Uniswap V2 fork with minimal changes to support NFTs.

## Deployed Contracts and Subgraphs

Ethereum:

| Contract     | Network (ID)      | Address                                                                                                                         |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ROUTER       | mainnet (1)       | [0x151522484121f4e28eA24c8b5d827132775a93FE](https://etherscan.io/address/0x151522484121f4e28eA24c8b5d827132775a93FE)           |
| FACTORY      | mainnet (1)       | [0x16eD649675e6Ed9F1480091123409B4b8D228dC1](https://etherscan.io/address/0x16eD649675e6Ed9F1480091123409B4b8D228dC1)           |
| ROUTER       | goerli (5)        | [0x151522484121f4e28eA24c8b5d827132775a93FE](https://goerli.etherscan.io/address/0x151522484121f4e28eA24c8b5d827132775a93FE)    |
| FACTORY      | goerli (5)        | [0x16eD649675e6Ed9F1480091123409B4b8D228dC1](https://goerli.etherscan.io/address/0x16eD649675e6Ed9F1480091123409B4b8D228dC1)    |

| Subgraph                        | Target | Network (ID)      | Endpoint                                                                                                                                 |
| ------------------------------- | ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [ALL](/subgraph/schema.graphql) | Studio | mainnet (1)       | [`QmQbhbTU9YCeajmXZa84pNGv5HC1HesVmPHGaNLMfPdA2C`](https://api.thegraph.com/subgraphs/id/QmQbhbTU9YCeajmXZa84pNGv5HC1HesVmPHGaNLMfPdA2C) |
| [ALL](/subgraph/schema.graphql) | Studio | goerli (5)        | [`QmatGwDRMMwbvSVWUNWkekoEqAypqjHctsJ7SrtkFtgiJb`](https://api.thegraph.com/subgraphs/id/QmatGwDRMMwbvSVWUNWkekoEqAypqjHctsJ7SrtkFtgiJb) |

Polygon Matic:

| Contract     | Network (ID)      | Address                                                                                                                         |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ROUTER       | maticmain (137)   | [0x151522484121f4e28eA24c8b5d827132775a93FE](https://polygonscan.com/address/0x151522484121f4e28eA24c8b5d827132775a93FE)        |
| FACTORY      | maticmain (137)   | [0x16eD649675e6Ed9F1480091123409B4b8D228dC1](https://polygonscan.com/address/0x16eD649675e6Ed9F1480091123409B4b8D228dC1)        |
| ROUTER       | matictest (80001) | [0x151522484121f4e28eA24c8b5d827132775a93FE](https://mumbai.polygonscan.com/address/0x151522484121f4e28eA24c8b5d827132775a93FE) |
| FACTORY      | matictest (80001) | [0x16eD649675e6Ed9F1480091123409B4b8D228dC1](https://mumbai.polygonscan.com/address/0x16eD649675e6Ed9F1480091123409B4b8D228dC1) |

| Subgraph                        | Target | Network (ID)      | Endpoint                                                                                                                                 |
| ------------------------------- | ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [ALL](/subgraph/schema.graphql) | Hosted | maticmain (137)   | [`QmbJnH4cLPuX5HftccJQdQ7QY9ehuT5tAd6BJKDZBCHCKh`](https://api.thegraph.com/subgraphs/id/QmbJnH4cLPuX5HftccJQdQ7QY9ehuT5tAd6BJKDZBCHCKh) |
| [ALL](/subgraph/schema.graphql) | Hosted | matictest (80001) | [`QmPxgnkr5L5yN1NTtqfQojSsjEXiY2UXKHV1GhfKpEQR48`](https://api.thegraph.com/subgraphs/id/QmPxgnkr5L5yN1NTtqfQojSsjEXiY2UXKHV1GhfKpEQR48) |

Arbitrum One:

| Contract     | Network (ID)      | Address                                                                                                                         |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ROUTER       | arbmain (42161)   | [0x151522484121f4e28eA24c8b5d827132775a93FE](https://arbiscan.io/address/0x151522484121f4e28eA24c8b5d827132775a93FE)            |
| FACTORY      | arbmain (42161)   | [0x16eD649675e6Ed9F1480091123409B4b8D228dC1](https://arbiscan.io/address/0x16eD649675e6Ed9F1480091123409B4b8D228dC1)            |

| Subgraph                        | Target | Network (ID)      | Endpoint                                                                                                                                 |
| ------------------------------- | ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [ALL](/subgraph/schema.graphql) | Studio | arbmain (42161)   | [`Qmd83gWztfhomuxpGgzrfmte8zckAjHBDgF4cMA2kxuTEw`](https://api.thegraph.com/subgraphs/id/Qmd83gWztfhomuxpGgzrfmte8zckAjHBDgF4cMA2kxuTEw) |

Avalanche:

| Contract     | Network (ID)      | Address                                                                                                                       |
| ------------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ROUTER       | avaxtest (43113)  | [0x151522484121f4e28eA24c8b5d827132775a93FE](https://testnet.snowtrace.io/address/0x151522484121f4e28eA24c8b5d827132775a93FE) |
| FACTORY      | avaxtest (43113)  | [0x16eD649675e6Ed9F1480091123409B4b8D228dC1](https://testnet.snowtrace.io/address/0x16eD649675e6Ed9F1480091123409B4b8D228dC1) |

| Subgraph                        | Target | Network (ID)      | Endpoint                                                                                                                                 |
| ------------------------------- | ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [ALL](/subgraph/schema.graphql) | Studio | avaxtest (43113)  | [`QmPvxBrugKkus8syHyNrjSD9zY7qG82SFFe2wWLcA5HZAg`](https://api.thegraph.com/subgraphs/id/QmPvxBrugKkus8syHyNrjSD9zY7qG82SFFe2wWLcA5HZAg) |
