import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-contract-sizer";

function _throw(message: string): never { throw new Error(message); }

const keystore: { [key: string]: string } = require('./keystore.json');
const etherscan: { [key: string]: string } = require('./etherscan.json');

const privateKeyId: string = process.env['PRIVATE_KEY_ID'] || 'default';
const privateKey: string = process.env['PRIVATE_KEY'] || keystore[privateKeyId] || _throw('Unknown privateKeyId: ' + privateKeyId);
const network: string = process.env['NETWORK'] || 'mainnet';
const balance: string = process.env['BALANCE'] || '1000000000000000000000';
const infuraProjectId: string = process.env['INFURA_PROJECT_ID'] || '';

const NETWORK_CONFIG: { [name: string]: [number, string] } = {
  // mainnets
  'mainnet': [1, 'https://mainnet.infura.io/v3/' + infuraProjectId], // ethereum
  'avaxmain': [43114, 'https://api.avax.network/ext/bc/C/rpc'], // avalanche
  'basemain': [8453, 'https://mainnet.base.org'], // base
  'bscmain': [56, 'https://bsc-dataseed.binance.org'], // bnb smart chain
  'ftmmain': [250, 'https://rpc.ftm.tools'], // fantom
  'lineamain': [59144, 'https://rpc.linea.build'], // linea
  'maticmain': [137, 'https://polygon-rpc.com'], // polygon
  'arbmain': [42161, 'https://arb1.arbitrum.io/rpc'], // arbitrum one
  // testnets
  'ropsten': [3, 'https://ropsten.infura.io/v3/' + infuraProjectId], // ropsten
  'rinkeby': [4, 'https://rinkeby.infura.io/v3/' + infuraProjectId], // rinkeby
  'kovan': [42, 'https://kovan.infura.io/v3/' + infuraProjectId], // kovan
  'goerli': [5, 'https://goerli.infura.io/v3/' + infuraProjectId], // goerli
  'avaxtest': [43113, 'https://api.avax-test.network/ext/bc/C/rpc'], // fuji
  'basetest': [84531, 'https://goerli.base.org'], // base goerli
  'bsctest': [97, 'https://data-seed-prebsc-1-s1.binance.org:8545'], // chapel
  'ftmtest': [4002, 'https://rpc.testnet.fantom.network'], // fantom testnet
  'lineatest': [59140, 'https://goerli.lineascan.build'], // linea goerli
  'matictest': [80001, 'https://matic-mumbai.chainstacklabs.com'], // mumbai
};

const [chainId, url] = NETWORK_CONFIG[network] || _throw('Unknown network: ' + network);

export default {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 222,
      },
    },
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
  },
  networks: {
    livenet: { url, accounts: [privateKey] },
    hardhat: { chainId, forking: { url }, accounts: [{ privateKey, balance }] },
  },
  etherscan: {
    apiKey: {
      // mainnets
      mainnet: etherscan['mainnet'], // ethereum
      avalanche: etherscan['avaxmain'], // avalanche
      basemain: etherscan['basemain'], // base (custom)
      bsc: etherscan['bscmain'], // bnb smart chain
      opera: etherscan['ftmmain'], // fantom
      lineamain: etherscan['lineamain'], // linea (custom)
      polygon: etherscan['maticmain'], // polygon
      arbitrumOne: etherscan['arbmain'], // arbitrum one
      // testnets
      ropsten: etherscan['mainnet'], // ropsten
      rinkeby: etherscan['mainnet'], // rinkeby
      kovan: etherscan['mainnet'], // kovan
      goerli: etherscan['mainnet'], // goerli
      avalancheFujiTestnet: etherscan['avaxmain'], // fuji
      basetest: etherscan['basemain'], // base goerli (custom)
      bscTestnet: etherscan['bscmain'], // chapel
      ftmTestnet: etherscan['ftmmain'], // fantom testnet
      lineatest: etherscan['lineamain'], // linea goerli (custom)
      polygonMumbai: etherscan['maticmain'], // mumbai
    },
    customChains: [
      {
        network: 'basemain',
        chainId: 8453,
        urls: {
          apiURL: 'https://api.basescan.org/api',
          browserURL: 'https://basescan.org',
        },
      },
      {
        network: 'basetest',
        chainId: 84531,
        urls: {
          apiURL: 'https://api-goerli.basescan.org/api',
          browserURL: 'https://goerli.basescan.org',
        },
      },
      {
        network: 'lineamain',
        chainId: 59144,
        urls: {
          apiURL: 'https://api.lineascan.build/api',
          browserURL: 'https://lineascan.build',
        },
      },
      {
        network: 'lineatest',
        chainId: 59140,
        urls: {
          apiURL: 'https://api-testnet.lineascan.build/api',
          browserURL: 'https://goerli.lineascan.build',
        },
      },
    ],
  },
};
