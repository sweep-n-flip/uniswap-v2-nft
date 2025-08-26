import { deployContract, initialize, verifyContract } from './library';

async function main(): Promise<void> {
  const { chainId, FROM } = await initialize();
  
  console.log('=== DEPLOY GenesisHLOgs NFT ===');
  console.log('Chain ID:', chainId);
  console.log('Deployer:', FROM);
  console.log('Network: Hyperliquid');
  
  try {
    console.log('\n🚀 Starting deployment...');
    const nftAddress = await deployContract('GenesisHLOgs');
    
    console.log('\n✅ Deployment successful!');
    console.log('📍 Contract Address:', nftAddress);
    console.log('📱 Contract Name: GenesisHLOgs');
    console.log('🔖 Symbol: GHLOG');
    console.log('👤 Deployer:', FROM);
    
    // Verify contract
    console.log('\n🔍 Verifying contract...');
    try {
      const verified = await verifyContract(nftAddress, 'contracts/tokens/GenesisHLOgs.sol:GenesisHLOgs');
      if (verified) {
        console.log('✅ Contract verification successful!');
      } else {
        console.log('ℹ️  Contract already verified');
      }
    } catch (error) {
      console.error('⚠️  Contract verification failed:', error);
      console.log('ℹ️  Contract deployed successfully but verification failed');
    }
    
    console.log('\n🎉 Deployment completed!');
    
  } catch (error) {
    console.error('❌ Deployment failed:', error);
    process.exit(1);
  }
}

// Execute deployment
if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('❌ Fatal error:', error);
      process.exit(1);
    });
}

export { main };
