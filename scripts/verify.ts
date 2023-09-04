import hardhat from 'hardhat';

async function verifyContract(address: string, contract: string, ...constructorArguments: unknown[]): Promise<boolean> {
  try {
    await hardhat.run('verify:verify', { address, contract, constructorArguments });
  } catch (e) {
    if (String(e).toLowerCase().indexOf('already verified') >= 0) return false;
    throw e;
  }
  return true;
}

const NETWORK_CONFIG: { [chainId: number]: [string, string] } = {
  // mainnets
  1: ['0xc718E5a5b06ce7FEd722B128C0C0Eb9c5c902D92', '0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F'], // ethereum
  43114: ['0x4748d173d1A8becFB9afC0aB2262EcDDf6822294', '0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'], // avalanche
  8453: ['0xc00d62Ce5C1543D939EEbb9d6dB213EF873300E3', '0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0x6BDED42c6DA8FBf0d2bA55B2fa120C5e0c8D7891'], // base
  56: ['0x4e9cA8ca6A113FC3Db72677aa04C8DE028618377', '0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'], // bnb smart chain
  250: ['0x8CBA65A8780e9887a51E77258b701db1e7aBAC05', '0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'], // fantom
  137: ['0xB41bbAEAd46042a229C6870207eB072aBb4FC18a', '0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'], // polygon
  42161: ['0x2703CD5357fa184bAAD92b834127362bf95b0858', '0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'], // arbitrum one
  // testnets
  3: ['0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xFDf35F1Bfe270e636f535a45Ce8D02457676e050', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'], // ropsten
  4: ['0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xFDf35F1Bfe270e636f535a45Ce8D02457676e050', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'], // rinkeby
  42: ['0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xFDf35F1Bfe270e636f535a45Ce8D02457676e050', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'], // kovan
  5: ['0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xFDf35F1Bfe270e636f535a45Ce8D02457676e050', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'], // goerli
  43113: ['0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xFDf35F1Bfe270e636f535a45Ce8D02457676e050', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'], // fuji
  84531: ['0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xFDf35F1Bfe270e636f535a45Ce8D02457676e050', '0x0000000000000000000000000000000000000000'], // base goerli
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

  const ONE_PERCENT = 10n**16n;
  const HALF_PERCENT = ONE_PERCENT / 2n;

  const BLOCKIES = '0x46bEF163D6C470a4774f9585F3500Ae3b642e751';
  console.log('BLOCKIES=' + BLOCKIES);

  const ROUTER = '0x46ed13B4EdDa147fA7eF018FB178300FA24C4Efc';
  console.log('ROUTER=' + ROUTER);
  const router = await hardhat.ethers.getContractAt('UniswapV2Router01Collection', ROUTER);

  const FACTORY = await router.factory();
  console.log('FACTORY=' + FACTORY);
  const factory = await hardhat.ethers.getContractAt('UniswapV2Factory', FACTORY);

  const WRAPPER = await factory.getWrapper(BLOCKIES);
  console.log('WRAPPER=' + WRAPPER);

  const PAIR = await factory.getPair(WETH, WRAPPER);
  console.log('PAIR=' + PAIR);

  await verifyContract(ROUTER, 'contracts/periphery/UniswapV2Router01Collection.sol:UniswapV2Router01Collection', FACTORY, WETH, ADMIN, ADMIN, 2n * ONE_PERCENT + HALF_PERCENT);
  await verifyContract(FACTORY, 'contracts/core/UniswapV2Factory.sol:UniswapV2Factory', ADMIN, FROM);
  await verifyContract(PAIR, 'contracts/core/UniswapV2Pair.sol:UniswapV2Pair');
  await verifyContract(WRAPPER, 'contracts/core/WERC721.sol:WERC721');

}

main(process.argv)
  .then(() => process.exit(0))
  .catch((e) => process.exit((console.error(e), 1)));
