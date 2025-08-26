const fs = require('fs');

// Lê o código flattened do GenesisHLOgs
const genesisSourceCode = fs.readFileSync('./GenesisHLOgs_flattened.sol', 'utf8');

// Cria o JSON de verificação para GenesisHLOgs
const genesisVerificationJson = {
  "language": "Solidity",
  "sources": {
    "GenesisHLOgs_flattened.sol": {
      "content": genesisSourceCode
    }
  },
  "settings": {
    "optimizer": {
      "enabled": true,
      "runs": 222
    },
    "outputSelection": {
      "*": {
        "*": [
          "evm.bytecode", 
          "evm.deployedBytecode",
          "abi"
        ]
      }
    },
    "evmVersion": "london",
    "metadata": {
      "useLiteralContent": true
    },
    "libraries": {}
  }
};

// Salva o JSON do GenesisHLOgs
fs.writeFileSync('./GenesisHLOgs_verification.json', JSON.stringify(genesisVerificationJson, null, 2));

console.log('✅ JSON de verificação gerado: GenesisHLOgs_verification.json');

// Constructor arguments para GenesisHLOgs (sem argumentos)
const genesisConstructorArgs = [
  // Sem argumentos de construtor
];

console.log('\n🎨 GENESIS HL-OGS VERIFICATION INFO:');
console.log('=====================================');
console.log(`Contract Address: 0xE967D204922aac2b8D9e7838850Cb0b67BF63F0e`);
console.log(`Compiler Version: v0.8.20+commit.a1b79de6`);
console.log(`License: 1) MIT License (MIT)`);
console.log(`Optimization: Enabled, Runs: 222`);
console.log(`Constructor Arguments: None`);

// ABI-encoded constructor arguments para GenesisHLOgs (vazio)
console.log('\nConstructor Arguments (ABI-encoded):');
console.log('(empty - no constructor arguments)');

console.log('\n📋 Contract Details:');
console.log('Name: GenesisHLOgs');
console.log('Symbol: GHLOG');
console.log('Type: ERC721A NFT Collection');
console.log('Features: Queryable, Burnable, Ownable');
console.log('Network: Hyperliquid');
