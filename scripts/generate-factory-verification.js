const fs = require('fs');

// Lê o código flattened do Factory
const factorySourceCode = fs.readFileSync('./UniswapV2Factory_flattened.sol', 'utf8');

// Cria o JSON de verificação para Factory
const factoryVerificationJson = {
  "language": "Solidity",
  "sources": {
    "UniswapV2Factory_flattened.sol": {
      "content": factorySourceCode
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

// Salva o JSON do Factory
fs.writeFileSync('./UniswapV2Factory_verification.json', JSON.stringify(factoryVerificationJson, null, 2));

console.log('✅ JSON de verificação gerado: UniswapV2Factory_verification.json');

// Constructor arguments para Factory (Hyperliquid)
const factoryConstructorArgs = [
  "0xF3d1Fb6F6B2702C937e6568f918c758F3efd573d",  // _feeToSetter (ADMIN)
  "0xF3d1Fb6F6B2702C937e6568f918c758F3efd573d"   // _routerSetter (FROM/ADMIN)
];

console.log('\n🏭 FACTORY VERIFICATION INFO:');
console.log('===============================');
console.log(`Contract Address: 0xa575959Ab114BF3a84A9B7D92838aC3b77324E65`);
console.log(`Compiler Version: v0.8.9+commit.e5eed63a`);
console.log(`License: 5) GNU General Public License v3.0 (GNU GPLv3)`);
console.log(`Optimization: Enabled, Runs: 222`);
console.log(`Constructor Arguments:`);
factoryConstructorArgs.forEach((arg, index) => {
  console.log(`  ${index}: ${arg}`);
});

// ABI-encoded constructor arguments para Factory
console.log('\nConstructor Arguments (ABI-encoded):');
console.log('000000000000000000000000f3d1fb6f6b2702c937e6568f918c758f3efd573d000000000000000000000000f3d1fb6f6b2702c937e6568f918c758f3efd573d');
