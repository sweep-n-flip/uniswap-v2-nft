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
| [ALL](/subgraph/schema.graphql) | Studio | mainnet (1)       | [`QmWYa45xwABhYXCCzX45m49wz63Bxod3CaAwSShDSavhPM`](https://api.thegraph.com/subgraphs/id/QmWYa45xwABhYXCCzX45m49wz63Bxod3CaAwSShDSavhPM) |
| [ALL](/subgraph/schema.graphql) | Studio | goerli (5)        | [`QmPqZiRnE1XGHFDM9VxRDX8KrgJDgCRoi6NVspzriQGzB2`](https://api.thegraph.com/subgraphs/id/QmPqZiRnE1XGHFDM9VxRDX8KrgJDgCRoi6NVspzriQGzB2) |

Polygon Matic:

| Contract     | Network (ID)      | Address                                                                                                                         |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ROUTER       | maticmain (137)   | [0x151522484121f4e28eA24c8b5d827132775a93FE](https://polygonscan.com/address/0x151522484121f4e28eA24c8b5d827132775a93FE)        |
| FACTORY      | maticmain (137)   | [0x16eD649675e6Ed9F1480091123409B4b8D228dC1](https://polygonscan.com/address/0x16eD649675e6Ed9F1480091123409B4b8D228dC1)        |
| ROUTER       | matictest (80001) | [0x151522484121f4e28eA24c8b5d827132775a93FE](https://mumbai.polygonscan.com/address/0x151522484121f4e28eA24c8b5d827132775a93FE) |
| FACTORY      | matictest (80001) | [0x16eD649675e6Ed9F1480091123409B4b8D228dC1](https://mumbai.polygonscan.com/address/0x16eD649675e6Ed9F1480091123409B4b8D228dC1) |

| Subgraph                        | Target | Network (ID)      | Endpoint                                                                                                                                 |
| ------------------------------- | ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [ALL](/subgraph/schema.graphql) | Hosted | maticmain (137)   | [`QmS22vxaZRRsCubnpDH13LqmKipjnUyUxUz1DoGKSxSMk7`](https://api.thegraph.com/subgraphs/id/QmS22vxaZRRsCubnpDH13LqmKipjnUyUxUz1DoGKSxSMk7) |
| [ALL](/subgraph/schema.graphql) | Hosted | matictest (80001) | [`QmYjWzBnY5TJAq3HXwauRyjLQPRmoznDaUtGe3LfD98pvt`](https://api.thegraph.com/subgraphs/id/QmYjWzBnY5TJAq3HXwauRyjLQPRmoznDaUtGe3LfD98pvt) |

Arbitrum One:

| Contract     | Network (ID)      | Address                                                                                                                         |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ROUTER       | arbmain (42161)   | [0x151522484121f4e28eA24c8b5d827132775a93FE](https://arbiscan.io/address/0x151522484121f4e28eA24c8b5d827132775a93FE)            |
| FACTORY      | arbmain (42161)   | [0x16eD649675e6Ed9F1480091123409B4b8D228dC1](https://arbiscan.io/address/0x16eD649675e6Ed9F1480091123409B4b8D228dC1)            |

| Subgraph                        | Target | Network (ID)      | Endpoint                                                                                                                                 |
| ------------------------------- | ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [ALL](/subgraph/schema.graphql) | Studio | arbmain (42161)   | [`QmbYY2jNF5Xs4MewYZofaGZfXh6P9VzgcUR37aiFTJDUcD`](https://api.thegraph.com/subgraphs/id/QmbYY2jNF5Xs4MewYZofaGZfXh6P9VzgcUR37aiFTJDUcD) |
