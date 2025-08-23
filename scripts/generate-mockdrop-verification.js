const fs = require('fs');

// Lê o código flattened do Mockdrop
const mockdropSourceCode = fs.readFileSync('./Mockdrop_flattened.sol', 'utf8');

// Cria o JSON de verificação para Mockdrop
const mockdropVerificationJson = {
  "language": "Solidity",
  "sources": {
    "Mockdrop_flattened.sol": {
      "content": mockdropSourceCode
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

// Salva o JSON do Mockdrop
fs.writeFileSync('./Mockdrop_verification.json', JSON.stringify(mockdropVerificationJson, null, 2));

console.log('✅ JSON de verificação gerado: Mockdrop_verification.json');

// Constructor arguments para Mockdrop (sem argumentos)
const mockdropConstructorArgs = [
  // Sem argumentos de construtor
];

console.log('\n🎨 MOCKDROP VERIFICATION INFO:');
console.log('===============================');
console.log(`Contract Address: 0x63eb9d77D083cA10C304E28d5191321977fd0Bfb`);
console.log(`Compiler Version: v0.8.20+commit.a1b79de6`);
console.log(`License: 1) MIT License (MIT)`);
console.log(`Optimization: Enabled, Runs: 222`);
console.log(`Constructor Arguments: None`);

// ABI-encoded constructor arguments para Mockdrop (vazio)
console.log('\nConstructor Arguments (ABI-encoded):');
console.log('(empty - no constructor arguments)');

console.log('\n📋 Contract Details:');
console.log('Name: Mockdrop');
console.log('Symbol: MOCK');
console.log('Type: ERC721A NFT Collection');
console.log('Features: Queryable, Burnable, Ownable');
console.log('Network: Hyperliquid Testnet');
