# Uniswap V2 NFT

[![Hardhat CI Actions Status](https://github.com/nftfy/uniswap-v2-nft/workflows/Hardhat%20CI/badge.svg)](https://github.com/nftfy/uniswap-v2-nft/actions)

A Uniswap V2 fork with minimal changes to support NFTs.

## Deployed Contracts and Subgraphs

Ethereum:

| Contract     | Network (ID)      | Address                                                                                                                         |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ROUTER       | mainnet (1)       | [0xB333AF3B159AC218DF43C9b85Cb24A724b72fb45](https://etherscan.io/address/0xB333AF3B159AC218DF43C9b85Cb24A724b72fb45)           |
| FACTORY      | mainnet (1)       | [0xB8900621B03892c2D030e05Cb9E01F6474814f6a](https://etherscan.io/address/0xB8900621B03892c2D030e05Cb9E01F6474814f6a)           |
| ROUTER       | goerli (5)        | [0xB333AF3B159AC218DF43C9b85Cb24A724b72fb45](https://goerli.etherscan.io/address/0xB333AF3B159AC218DF43C9b85Cb24A724b72fb45)    |
| FACTORY      | goerli (5)        | [0xB8900621B03892c2D030e05Cb9E01F6474814f6a](https://goerli.etherscan.io/address/0xB8900621B03892c2D030e05Cb9E01F6474814f6a)    |

| Subgraph                        | Target | Network (ID)      | Endpoint                                                                                                                                 |
| ------------------------------- | ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [ALL](/subgraph/schema.graphql) | Studio | mainnet (1)       | [`QmUZcL5cvJQMAD5bTpDKGkkhbBgb6qMGwJxs7ryLD8jKtL`](https://api.thegraph.com/subgraphs/id/QmUZcL5cvJQMAD5bTpDKGkkhbBgb6qMGwJxs7ryLD8jKtL) |
| [ALL](/subgraph/schema.graphql) | Studio | goerli (5)        | [`QmVZEn4UASxUWsW8BkEaoy7bGRE7fziy2oCS31eLmLP2hw`](https://api.thegraph.com/subgraphs/id/QmVZEn4UASxUWsW8BkEaoy7bGRE7fziy2oCS31eLmLP2hw) |

Polygon Matic:

| Contract     | Network (ID)      | Address                                                                                                                         |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ROUTER       | maticmain (137)   | [0xB333AF3B159AC218DF43C9b85Cb24A724b72fb45](https://polygonscan.com/address/0xB333AF3B159AC218DF43C9b85Cb24A724b72fb45)        |
| FACTORY      | maticmain (137)   | [0xB8900621B03892c2D030e05Cb9E01F6474814f6a](https://polygonscan.com/address/0xB8900621B03892c2D030e05Cb9E01F6474814f6a)        |
| ROUTER       | matictest (80001) | [0xB333AF3B159AC218DF43C9b85Cb24A724b72fb45](https://mumbai.polygonscan.com/address/0xB333AF3B159AC218DF43C9b85Cb24A724b72fb45) |
| FACTORY      | matictest (80001) | [0xB8900621B03892c2D030e05Cb9E01F6474814f6a](https://mumbai.polygonscan.com/address/0xB8900621B03892c2D030e05Cb9E01F6474814f6a) |

| Subgraph                        | Target | Network (ID)      | Endpoint                                                                                                                                 |
| ------------------------------- | ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [ALL](/subgraph/schema.graphql) | Hosted | maticmain (137)   | [`QmRgdodPnNTFSSHL1z6XEubniLCfCq62vAvdRDw47Tzj5v`](https://api.thegraph.com/subgraphs/id/QmRgdodPnNTFSSHL1z6XEubniLCfCq62vAvdRDw47Tzj5v) |
| [ALL](/subgraph/schema.graphql) | Hosted | matictest (80001) | [`QmbqPnwMbwJzUWgXDciSwgANjFmyP8PAvQQ7ACgw73S2uM`](https://api.thegraph.com/subgraphs/id/QmbqPnwMbwJzUWgXDciSwgANjFmyP8PAvQQ7ACgw73S2uM) |
