# Uniswap V2 NFT

[![Hardhat CI Actions Status](https://github.com/nftfy/uniswap-v2-nft/workflows/Hardhat%20CI/badge.svg)](https://github.com/nftfy/uniswap-v2-nft/actions)

A Uniswap V2 fork with minimal changes to support NFTs.

## Deployed Contracts and Subgraphs

Ethereum:

| Contract     | Network (ID)      | Address                                                                                                                         |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ROUTER       | mainnet (1)       | [0x0000000000000000000000000000000000000000](https://etherscan.io/address/0x0000000000000000000000000000000000000000)           |
| FACTORY      | mainnet (1)       | [0x0000000000000000000000000000000000000000](https://etherscan.io/address/0x0000000000000000000000000000000000000000)           |
| ROUTER       | goerli (5)        | [0x151522484121f4e28eA24c8b5d827132775a93FE](https://goerli.etherscan.io/address/0x151522484121f4e28eA24c8b5d827132775a93FE)    |
| FACTORY      | goerli (5)        | [0x16eD649675e6Ed9F1480091123409B4b8D228dC1](https://goerli.etherscan.io/address/0x16eD649675e6Ed9F1480091123409B4b8D228dC1)    |

| Subgraph                        | Target | Network (ID)      | Endpoint                                                                                                                                 |
| ------------------------------- | ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [ALL](/subgraph/schema.graphql) | Studio | mainnet (1)       | [`Qmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm`](https://api.thegraph.com/subgraphs/id/Qmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm) |
| [ALL](/subgraph/schema.graphql) | Studio | goerli (5)        | [`QmVZEn4UASxUWsW8BkEaoy7bGRE7fziy2oCS31eLmLP2hw`](https://api.thegraph.com/subgraphs/id/QmPgzxAuAMYpKbiRrf72uQ1Sz7HAsajNc3ch4b173D7268) |

Polygon Matic:

| Contract     | Network (ID)      | Address                                                                                                                         |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ROUTER       | maticmain (137)   | [0x151522484121f4e28eA24c8b5d827132775a93FE](https://polygonscan.com/address/0x151522484121f4e28eA24c8b5d827132775a93FE)        |
| FACTORY      | maticmain (137)   | [0x16eD649675e6Ed9F1480091123409B4b8D228dC1](https://polygonscan.com/address/0x16eD649675e6Ed9F1480091123409B4b8D228dC1)        |
| ROUTER       | matictest (80001) | [0x0000000000000000000000000000000000000000](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000) |
| FACTORY      | matictest (80001) | [0x0000000000000000000000000000000000000000](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000) |

| Subgraph                        | Target | Network (ID)      | Endpoint                                                                                                                                 |
| ------------------------------- | ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [ALL](/subgraph/schema.graphql) | Hosted | maticmain (137)   | [`QmXSdbcnTz6ji57RrwoVPHCQtRwP5X8uNFPbakLCQWonKv`](https://api.thegraph.com/subgraphs/id/QmXSdbcnTz6ji57RrwoVPHCQtRwP5X8uNFPbakLCQWonKv) |
| [ALL](/subgraph/schema.graphql) | Hosted | matictest (80001) | [`Qmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm`](https://api.thegraph.com/subgraphs/id/Qmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm) |

Arbitrum One:

| Contract     | Network (ID)      | Address                                                                                                                         |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ROUTER       | arbmain (42161)   | [0x0000000000000000000000000000000000000000](https://arbiscan.io/address/0x0000000000000000000000000000000000000000)            |
| FACTORY      | arbmain (42161)   | [0x0000000000000000000000000000000000000000](https://arbiscan.io/address/0x0000000000000000000000000000000000000000)            |

| Subgraph                        | Target | Network (ID)      | Endpoint                                                                                                                                 |
| ------------------------------- | ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [ALL](/subgraph/schema.graphql) | Studio | arbmain (42161)   | [`Qmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm`](https://api.thegraph.com/subgraphs/id/Qmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm) |
