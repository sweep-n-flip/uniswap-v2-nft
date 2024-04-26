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
| ROUTER       | arbmain (42161)   | [0x46ed13B4EdDa147fA7eF018FB178300FA24C4Efc](https://arbiscan.io/address/0x46ed13B4EdDa147fA7eF018FB178300FA24C4Efc)            |
| FACTORY      | arbmain (42161)   | [0xFc42221594c07F2EFCEDfb11f4763FCa03248B5A](https://arbiscan.io/address/0xFc42221594c07F2EFCEDfb11f4763FCa03248B5A)            |

| Subgraph                        | Target | Network (ID)      | Endpoint                                                                                                                                 |
| ------------------------------- | ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [ALL](/subgraph/schema.graphql) | Studio | arbmain (42161)   | [`QmRmo1WokR6DawFYsM4CGASPGKzseBUuxEpaTMLHtQ5RqY`](https://api.thegraph.com/subgraphs/id/QmRmo1WokR6DawFYsM4CGASPGKzseBUuxEpaTMLHtQ5RqY) |

Avalanche:

| Contract     | Network (ID)      | Address                                                                                                                       |
| ------------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ROUTER       | avaxmain (43114)  | [0x46ed13B4EdDa147fA7eF018FB178300FA24C4Efc](https://snowtrace.io/address/0x46ed13B4EdDa147fA7eF018FB178300FA24C4Efc)         |
| FACTORY      | avaxmain (43114)  | [0xFc42221594c07F2EFCEDfb11f4763FCa03248B5A](https://snowtrace.io/address/0xFc42221594c07F2EFCEDfb11f4763FCa03248B5A)         |
| ROUTER       | avaxtest (43113)  | [0x151522484121f4e28eA24c8b5d827132775a93FE](https://testnet.snowtrace.io/address/0x151522484121f4e28eA24c8b5d827132775a93FE) |
| FACTORY      | avaxtest (43113)  | [0x16eD649675e6Ed9F1480091123409B4b8D228dC1](https://testnet.snowtrace.io/address/0x16eD649675e6Ed9F1480091123409B4b8D228dC1) |

| Subgraph                        | Target | Network (ID)      | Endpoint                                                                                                                                 |
| ------------------------------- | ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [ALL](/subgraph/schema.graphql) | Studio | avaxmain (43114)  | [`QmUx9N8xcXmWkaxSrXN7Kf4EDVuWuPM3ZQx9HDfFR2d8xv`](https://api.thegraph.com/subgraphs/id/QmUx9N8xcXmWkaxSrXN7Kf4EDVuWuPM3ZQx9HDfFR2d8xv) |
| [ALL](/subgraph/schema.graphql) | Studio | avaxtest (43113)  | [`QmPvxBrugKkus8syHyNrjSD9zY7qG82SFFe2wWLcA5HZAg`](https://api.thegraph.com/subgraphs/id/QmPvxBrugKkus8syHyNrjSD9zY7qG82SFFe2wWLcA5HZAg) |

Base:

| Contract     | Network (ID)      | Address                                                                                                                       |
| ------------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ROUTER       | basemain (8453)   | [0x46ed13B4EdDa147fA7eF018FB178300FA24C4Efc](https://basescan.org/address/0x46ed13B4EdDa147fA7eF018FB178300FA24C4Efc)         |
| FACTORY      | basemain (8453)   | [0xFc42221594c07F2EFCEDfb11f4763FCa03248B5A](https://basescan.org/address/0xFc42221594c07F2EFCEDfb11f4763FCa03248B5A)         |

| Subgraph                        | Target | Network (ID)      | Endpoint                                                                                                                                 |
| ------------------------------- | ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [ALL](/subgraph/schema.graphql) | Studio | basemain (8453)   | [`QmQ28JfS4jqSdqijeXZarQjnjc6rhpXrNrrz6UMah3NAnk`](https://api.thegraph.com/subgraphs/id/QmQ28JfS4jqSdqijeXZarQjnjc6rhpXrNrrz6UMah3NAnk) |

BNB Smart Chain:

| Contract     | Network (ID)      | Address                                                                                                                       |
| ------------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ROUTER       | bscmain (56)      | [0x46ed13B4EdDa147fA7eF018FB178300FA24C4Efc](https://bscscan.com/address/0x46ed13B4EdDa147fA7eF018FB178300FA24C4Efc)          |
| FACTORY      | bscmain (56)      | [0xFc42221594c07F2EFCEDfb11f4763FCa03248B5A](https://bscscan.com/address/0xFc42221594c07F2EFCEDfb11f4763FCa03248B5A)          |

| Subgraph                        | Target | Network (ID)      | Endpoint                                                                                                                                 |
| ------------------------------- | ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [ALL](/subgraph/schema.graphql) | Studio | bscmain (56)      | [`QmSVceRG33Sy1kBp6uZQGsTE5t1yuatYqzNEotXK8Wxao9`](https://api.thegraph.com/subgraphs/id/QmSVceRG33Sy1kBp6uZQGsTE5t1yuatYqzNEotXK8Wxao9) |

Linea:

| Contract     | Network (ID)      | Address                                                                                                                       |
| ------------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ROUTER       | lineamain (59144) | [0x46ed13B4EdDa147fA7eF018FB178300FA24C4Efc](https://lineascan.build/address/0x46ed13B4EdDa147fA7eF018FB178300FA24C4Efc)      |
| FACTORY      | lineamain (59144) | [0xFc42221594c07F2EFCEDfb11f4763FCa03248B5A](https://lineascan.build/address/0xFc42221594c07F2EFCEDfb11f4763FCa03248B5A)      |

| Subgraph                        | Target | Network (ID)      | Endpoint                                                                                                                                        |
| ------------------------------- | ------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [ALL](/subgraph/schema.graphql) | Studio | lineamain (59144) | [`QmW1GcAFPsBD8vjjtgbTs5xvtq76oa5XvyTFAFNegBv6cy`](https://graph-query.linea.build/subgraphs/id/QmW1GcAFPsBD8vjjtgbTs5xvtq76oa5XvyTFAFNegBv6cy) |

Blast:

| Contract     | Network (ID)      | Address                                                                                                                    |
| ------------ | ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| ROUTER       | blastmain (81457) | [0x151522484121f4e28eA24c8b5d827132775a93FE](https://blastscan.io/address/0x151522484121f4e28eA24c8b5d827132775a93FE)      |
| FACTORY      | blastmain (81457) | [0x16eD649675e6Ed9F1480091123409B4b8D228dC1](https://blastscan.io/address/0x16eD649675e6Ed9F1480091123409B4b8D228dC1)      |

| Subgraph                        | Target | Network (ID)      | Endpoint                                                                                                                                 |
| ------------------------------- | ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [ALL](/subgraph/schema.graphql) | Studio | blastmain (81457) | [`Qmc6eQvp3yFnfLxQdLEYj6mLmGEBaBvMFHYi99xBfBieEx`](https://api.thegraph.com/subgraphs/id/Qmc6eQvp3yFnfLxQdLEYj6mLmGEBaBvMFHYi99xBfBieEx) |

Optimism:

| Contract     | Network (ID) | Address                                                                                                                          |
| ------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| ROUTER       | optmain (10) | [0xB18e06D9eBC9dBa28D56C112D44c6AC9b343E2Cb](https://optimistic.etherscan.io/address/0xB18e06D9eBC9dBa28D56C112D44c6AC9b343E2Cb) |
| FACTORY      | optmain (10) | [0x7962223D940E1b099AbAe8F54caBFB8a3a0887AB](https://optimistic.etherscan.io/address/0x7962223D940E1b099AbAe8F54caBFB8a3a0887AB) |

| Subgraph                        | Target | Network (ID)      | Endpoint                                                                                                                                 |
| ------------------------------- | ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [ALL](/subgraph/schema.graphql) | Studio | optmain (10)      | [`QmeNdCFKzNTac7FSFGMxbTvkevZwLanwMcGGeidoWqySCp`](https://api.thegraph.com/subgraphs/id/QmeNdCFKzNTac7FSFGMxbTvkevZwLanwMcGGeidoWqySCp) |

Mode:

| Contract     | Network (ID)     | Address                                                                                                                        |
| ------------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| ROUTER       | modemain (34443) | [0xB18e06D9eBC9dBa28D56C112D44c6AC9b343E2Cb](https://explorer.mode.network/address/0xB18e06D9eBC9dBa28D56C112D44c6AC9b343E2Cb) |
| FACTORY      | modemain (34443) | [0x7962223D940E1b099AbAe8F54caBFB8a3a0887AB](https://explorer.mode.network/address/0x7962223D940E1b099AbAe8F54caBFB8a3a0887AB) |

| Subgraph                        | Target | Network (ID)      | Endpoint                                                                                                                                 |
| ------------------------------- | ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [ALL](/subgraph/schema.graphql) | Studio | modemain (34443)  | [`QmR8XG3qeJeSAau5rLc2CpomhTRCN28MQXxHFnTdNr9LbX`](https://api.thegraph.com/subgraphs/id/QmR8XG3qeJeSAau5rLc2CpomhTRCN28MQXxHFnTdNr9LbX) |
