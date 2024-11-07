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
| ROUTER       | bscmain (56)      | [0x790488868E4b2eDb166778D67142035091eb130A](https://bscscan.com/address/0x790488868E4b2eDb166778D67142035091eb130A)          |
| FACTORY      | bscmain (56)      | [0x1fC0D65ae98F69cD8DCDA4ec0F6155A5F2a7b0ab](https://bscscan.com/address/0x1fC0D65ae98F69cD8DCDA4ec0F6155A5F2a7b0ab)          |

| Subgraph                        | Target | Network (ID)      | Endpoint                                                                                                                                |
| ------------------------------- | ------ | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [ALL](/subgraph/schema.graphql) | Studio | bscmain (56)      | [`QmNQBgfJRuGUvZXPzRPBGiBTboFpMW7VEXDFFF8BLyNyt1`](https://api.studio.thegraph.com/query/93076/sweep-n-flip-amm/version/latest) |

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

Moombeam:

| Contract     | Network (ID)        | Address                                                                                                              |
| ------------ | ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| ROUTER       | moonbeammain (1284) | [0xB18e06D9eBC9dBa28D56C112D44c6AC9b343E2Cb](https://moonscan.io/address/0xB18e06D9eBC9dBa28D56C112D44c6AC9b343E2Cb) |
| FACTORY      | moonbeammain (1284) | [0x7962223D940E1b099AbAe8F54caBFB8a3a0887AB](https://moonscan.io/address/0x7962223D940E1b099AbAe8F54caBFB8a3a0887AB) |

| Subgraph                        | Target | Network (ID)        | Endpoint                                                                                                                                 |
| ------------------------------- | ------ | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [ALL](/subgraph/schema.graphql) | Studio | moonbeammain (1284) | [`Qmdcz8JZwkuQcMqG2CJgAE1Y4njKxpfUFzk6CWXmUquHFR`](https://api.thegraph.com/subgraphs/id/Qmdcz8JZwkuQcMqG2CJgAE1Y4njKxpfUFzk6CWXmUquHFR) |

Berachain:

| Contract     | Network (ID)     | Address                                                                                                                      |
| ------------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| ROUTER       | beratest (80084) | [0x2C4F3f0EEB169BaE301151FbFa99B4c82438F4FD](https://bartio.beratrail.io/address/0x2C4F3f0EEB169BaE301151FbFa99B4c82438F4FD) |
| FACTORY      | beratest (80084) | [0x65624436e377c8A4A6918B69927e56982331b590](https://bartio.beratrail.io/address/0x65624436e377c8A4A6918B69927e56982331b590) |

| Subgraph                        | Target | Network (ID)     | Endpoint                                                                                                                                                         |
| ------------------------------- | ------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ALL](/subgraph/schema.graphql) | Studio | beratest (80084) | [`QmViHi5iXpXuLeKNZmz8M8YnxQJ4pvLAME4Ef5pLv9xesK`](https://api.goldsky.com/api/public/project_cm08eswaacp6901wwdaxnfyjq/subgraphs/nftfy-beratest/v1.0.13-uni/gn) |

Strato VM:

| Contract     | Network (ID)     | Address                                                                                                                        |
| ------------ |------------------|--------------------------------------------------------------------------------------------------------------------------------|
| ROUTER       | stratovm (93747) | [0x578F1F1497fFB6E26Cc039D3729b4Db9B8263B94](https://explorer.stratovm.io/address/0x578F1F1497fFB6E26Cc039D3729b4Db9B8263B94)  |
| FACTORY      | stratovm (93747) | [0xb9456FBf1F17b46c69361Cd9d42CAe12138225FA](https://explorer.stratovm.io/address/0xb9456FBf1F17b46c69361Cd9d42CAe12138225FA)  |

| Subsquid                        | Target | Network (ID)     | Endpoint                                                                                                                        |
|---------------------------------| ------ | ---------------- |---------------------------------------------------------------------------------------------------------------------------------|
| [ALL](/subsquid/schema.graphql) | Studio | stratovm (93747) | [`sweepnflip-amm-subsquid@v1`](https://736998a3-c1a8-4216-ab1f-90b065e35097.squids.live/sweepnflip-amm-subsquid@v1/api/graphql) |

Bitfinity:

| Contract     | Network (ID)         | Address                                                                                                                                     |
| ------------ |----------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| ROUTER       | bitfinity (355113)   | [0x578F1F1497fFB6E26Cc039D3729b4Db9B8263B94](https://explorer.testnet.bitfinity.network/address/0x578F1F1497fFB6E26Cc039D3729b4Db9B8263B94) |
| FACTORY      | bitfinity (355113)   | [0xb9456FBf1F17b46c69361Cd9d42CAe12138225FA](https://explorer.testnet.bitfinity.network/address/0xb9456FBf1F17b46c69361Cd9d42CAe12138225FA) |

| Subsquid                        | Target | Network (ID)        | Endpoint                                                                                                                     |
|---------------------------------| ------ |---------------------|------------------------------------------------------------------------------------------------------------------------------|
| [ALL](/subsquid/schema.graphql) | Studio | bitfinity (355113)  | [`sweepnflip-amm-subsquid@v1`](https://242ed9ab-9df0-4458-98fd-529803ec78a5.squids.live/sweepnflip-amm-squid@v1/api/graphql) |
