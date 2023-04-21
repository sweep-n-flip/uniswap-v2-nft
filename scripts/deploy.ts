import fs from 'fs';
import hardhat from 'hardhat';
import { EOL } from 'os';

function _throw(message: string): never { throw new Error(message); }

async function deployContract(name: string, ...args: unknown[]): Promise<string> {
  const Contract = await hardhat.ethers.getContractFactory(name);
  const contract = await Contract.deploy(...args);
  await contract.deployed();
  return contract.address;
}

const NETWORK_CONFIG: { [chainId: number]: [string, string] } = {
  // mainnets
  1: ['0xc718E5a5b06ce7FEd722B128C0C0Eb9c5c902D92', '0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F'], // ethereum
  43114: ['0x4748d173d1A8becFB9afC0aB2262EcDDf6822294', '0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'], // avalanche
  56: ['0x4e9cA8ca6A113FC3Db72677aa04C8DE028618377', '0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'], // bnb smart chain
  250: ['0x8CBA65A8780e9887a51E77258b701db1e7aBAC05', '0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'], // fantom
  137: ['0xB41bbAEAd46042a229C6870207eB072aBb4FC18a', '0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'], // polygon
  // testnets
  3: ['0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xFDf35F1Bfe270e636f535a45Ce8D02457676e050', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'], // ropsten
  4: ['0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xFDf35F1Bfe270e636f535a45Ce8D02457676e050', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'], // rinkeby
  42: ['0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xFDf35F1Bfe270e636f535a45Ce8D02457676e050', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'], // kovan
  5: ['0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xFDf35F1Bfe270e636f535a45Ce8D02457676e050', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'], // goerli
  43113: ['0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xFDf35F1Bfe270e636f535a45Ce8D02457676e050', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'], // fuji
  97: ['0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xFDf35F1Bfe270e636f535a45Ce8D02457676e050', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'], // chapel
  4002: ['0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xFDf35F1Bfe270e636f535a45Ce8D02457676e050', '0x0000000000000000000000000000000000000000'], // fantom testnet
  80001: ['0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xFDf35F1Bfe270e636f535a45Ce8D02457676e050', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'], // mumbai
};

async function main(args: string[]): Promise<void> {

  const { chainId } = await hardhat.ethers.provider.getNetwork();
  console.log('chainId ' + chainId);

  const signers = await hardhat.ethers.getSigners();
  if (signers.length !== 1) throw new Error('panic');
  const [signer] = signers;
  if (signer === undefined) throw new Error('panic');
  const FROM = await signer.getAddress();
  console.log('FROM=' + FROM);

  const [ADMIN, FUNDING, DELEGATE_ROUTER] = NETWORK_CONFIG[chainId] || _throw('Unknown chainId: ' + chainId);
  console.log('ADMIN=' + ADMIN);
  console.log('FUNDING=' + FUNDING);
  console.log('DELEGATE_ROUTER=' + DELEGATE_ROUTER);

  const delegateRouter = await hardhat.ethers.getContractAt('IUniswapV2Router01', DELEGATE_ROUTER);

  const DELEGATE_FACTORY = await delegateRouter.factory();
  console.log('DELEGATE_FACTORY=' + DELEGATE_FACTORY);

  const WETH = await delegateRouter.WETH();
  console.log('WETH=' + WETH);

  {
    // sanity check
    const filename = __dirname + '/../contracts/core/Delegation.sol';
    const contents = fs.readFileSync(filename).toString().split(EOL).filter((line) => !line.match(/^\s*\/\//)).join(EOL);
    if (!contents.includes(DELEGATE_FACTORY)) throw new Error('Invalid delegation');
  }

  const ONE_PERCENT = 10n**16n;
  const HALF_PERCENT = ONE_PERCENT / 2n;

  const BLOCKIES = '0x46bEF163D6C470a4774f9585F3500Ae3b642e751';
  console.log('BLOCKIES=' + BLOCKIES);

  const FACTORY = await deployContract('UniswapV2Factory', ADMIN);
  console.log('FACTORY=' + FACTORY);

  const ROUTER = await deployContract('UniswapV2Router01Collection', FACTORY, WETH, ADMIN, ADMIN, HALF_PERCENT, ONE_PERCENT);
  console.log('ROUTER=' + ROUTER);

  {
    const factory = await hardhat.ethers.getContractAt('UniswapV2Factory', FACTORY);
    const initCodeHash = await factory._initCodeHash();
    console.log('initCodeHash=' + initCodeHash);

    const WRAPPER = await factory.callStatic.createWrapper(BLOCKIES);
    console.log('WRAPPER=' + WRAPPER);
    {
      const tx = await factory.createWrapper(BLOCKIES);
      await tx.wait();
    }

    const PAIR = await factory.callStatic.createPair(WETH, WRAPPER);
    console.log('PAIR=' + PAIR);
    {
      const tx = await factory.createPair(WETH, WRAPPER);
      await tx.wait();
    }

    {
      // sanity check
      const filename = __dirname + '/../contracts/periphery/libraries/UniswapV2Library.sol';
      const contents = fs.readFileSync(filename).toString().split(EOL).filter((line) => !line.match(/^\s*\/\//)).join(EOL);
      if (!contents.includes(initCodeHash.substring(2))) throw new Error('Invalid initCodeHash');
    }
  }

  {
    console.log('Transferring change...');
    const balance = BigInt(String(await hardhat.ethers.provider.getBalance(FROM)));
    const gasPrice = BigInt(String(await hardhat.ethers.provider.getGasPrice()));
    const gasLimit = 21000n;
    const fee = gasPrice * gasLimit;
    const value = balance - fee;
    const to = FUNDING;
    const tx = await signer.sendTransaction({ to, value, gasLimit, gasPrice });
    await tx.wait();
  }

}

main(process.argv)
  .then(() => process.exit(0))
  .catch((e) => process.exit((console.error(e), 1)));
