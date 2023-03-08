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
  1: ['0xc718E5a5b06ce7FEd722B128C0C0Eb9c5c902D92', '0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'], // ethereum
  43114: ['0x4748d173d1A8becFB9afC0aB2262EcDDf6822294', '0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7'], // avalanche
  56: ['0x4e9cA8ca6A113FC3Db72677aa04C8DE028618377', '0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'], // bnb smart chain
  250: ['0x8CBA65A8780e9887a51E77258b701db1e7aBAC05', '0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'], // fantom
  137: ['0xB41bbAEAd46042a229C6870207eB072aBb4FC18a', '0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'], // polygon
  // testnets
  3: ['0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xFDf35F1Bfe270e636f535a45Ce8D02457676e050', '0xc778417E063141139Fce010982780140Aa0cD5Ab'], // ropsten
  4: ['0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xFDf35F1Bfe270e636f535a45Ce8D02457676e050', '0xc778417E063141139Fce010982780140Aa0cD5Ab'], // rinkeby
  42: ['0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xFDf35F1Bfe270e636f535a45Ce8D02457676e050', '0xd0A1E359811322d97991E03f863a0C30C2cF029C'], // kovan
  5: ['0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xFDf35F1Bfe270e636f535a45Ce8D02457676e050', '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'], // goerli
  43113: ['0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xFDf35F1Bfe270e636f535a45Ce8D02457676e050', '0xd00ae08403B9bbb9124bB305C09058E32C39A48c'], // fuji
  97: ['0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xFDf35F1Bfe270e636f535a45Ce8D02457676e050', '0x0000000000000000000000000000000000000000'], // chapel
  4002: ['0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xFDf35F1Bfe270e636f535a45Ce8D02457676e050', '0x0000000000000000000000000000000000000000'], // fantom testnet
  80001: ['0x3112eb8e651611Fdb8C9a5b9f80222b090e36601', '0xFDf35F1Bfe270e636f535a45Ce8D02457676e050', '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'], // mumbai
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

  const [ADMIN, FUNDING, WETH] = NETWORK_CONFIG[chainId] || _throw('Unknown chainId: ' + chainId);
  console.log('ADMIN=' + ADMIN);
  console.log('FUNDING=' + FUNDING);
  console.log('WETH=' + WETH);

  const ONE_PERCENT = 10n**16n;
  const HALF_PERCENT = ONE_PERCENT / 2n;

  const BLOCKIES = '0x46bEF163D6C470a4774f9585F3500Ae3b642e751';
  console.log('BLOCKIES=' + BLOCKIES);

  const ROUTER = '0x2e77B9E32abf426B8bBa063d69D07fAc33B31b59';
  const router = await hardhat.ethers.getContractAt('UniswapV2Router01Collection', ROUTER);

  const FACTORY = await router.factory();
  const factory = await hardhat.ethers.getContractAt('UniswapV2Factory', FACTORY);

  const WRAPPER = await factory.getWrapper(BLOCKIES);

  const PAIR = await factory.getPair(WETH, WRAPPER);

  await verifyContract(ROUTER, 'contracts/periphery/UniswapV2Router01Collection.sol:UniswapV2Router01Collection', FACTORY, WETH, ADMIN, ADMIN, HALF_PERCENT, ONE_PERCENT);
  await verifyContract(FACTORY, 'contracts/core/UniswapV2Factory.sol:UniswapV2Factory', ADMIN);
  await verifyContract(PAIR, 'contracts/core/UniswapV2Pair.sol:UniswapV2Pair');
  await verifyContract(WRAPPER, 'contracts/core/WERC721.sol:WERC721');

}

main(process.argv)
  .then(() => process.exit(0))
  .catch((e) => process.exit((console.error(e), 1)));
