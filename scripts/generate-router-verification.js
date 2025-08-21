const fs = require('fs');

// Lê o código flattened do Router
const routerSourceCode = fs.readFileSync('./UniswapV2Router01Collection_flattened.sol', 'utf8');

// Cria o JSON de verificação para Router
const routerVerificationJson = {
  "language": "Solidity",
  "sources": {
    "UniswapV2Router01Collection_flattened.sol": {
      "content": routerSourceCode
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

// Salva o JSON do Router
fs.writeFileSync('./UniswapV2Router01Collection_verification.json', JSON.stringify(routerVerificationJson, null, 2));

console.log('✅ JSON de verificação gerado: UniswapV2Router01Collection_verification.json');

// Constructor arguments para Router (Hyperliquid)
const routerConstructorArgs = [
  "0xa575959Ab114BF3a84A9B7D92838aC3b77324E65",  // _factory (novo Factory deployado)
  "0x5555555555555555555555555555555555555555",  // _WETH (WHYPE token)
  "0xF3d1Fb6F6B2702C937e6568f918c758F3efd573d",  // _marketplaceAdmin
  "0xF3d1Fb6F6B2702C937e6568f918c758F3efd573d",  // _marketplaceWallet
  "2500000000000000000"                          // _marketplaceFee (2.5%)
];

console.log('\n🔄 ROUTER VERIFICATION INFO:');
console.log('===============================');
console.log(`Contract Address: 0x1c865C75ab96aEbe4F3beEb4388036047240096b`);
console.log(`Compiler Version: v0.8.9+commit.e5eed63a`);
console.log(`License: 5) GNU General Public License v3.0 (GNU GPLv3)`);
console.log(`Optimization: Enabled, Runs: 222`);
console.log(`Constructor Arguments:`);
routerConstructorArgs.forEach((arg, index) => {
  console.log(`  ${index}: ${arg}`);
});

// ABI-encoded constructor arguments para Router
console.log('\nConstructor Arguments (ABI-encoded):');
console.log('000000000000000000000000a575959ab114bf3a84a9b7d92838ac3b77324e650000000000000000000000005555555555555555555555555555555555555555000000000000000000000000f3d1fb6f6b2702c937e6568f918c758f3efd573d000000000000000000000000f3d1fb6f6b2702c937e6568f918c758f3efd573d00000000000000000000000000000000000000000000000022b1c8c1227a0000');
