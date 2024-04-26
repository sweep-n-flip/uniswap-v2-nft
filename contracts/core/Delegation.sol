// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.9;

address constant DELEGATE_FACTORY = 0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac; // SushiSwap (Ethereum mainnet)
//address constant DELEGATE_FACTORY = 0x71524B4f93c58fcbF659783284E38825f0622859; // SushiSwap (Base mainnet)
//address constant DELEGATE_FACTORY = 0xc35DADB65012eC5796536bD9864eD8773aBc74C4; // SushiSwap (most but Ethereum/Base mainnet)
//address constant DELEGATE_FACTORY = 0x02a84c1b3BBD7401a5f7fa98a384EBC70bB5749E; // PancakeSwap (Linea mainnet)
//address constant DELEGATE_FACTORY = 0xd03D8D566183F0086d8D09A84E1e30b58Dd5619d; // PancakeSwap (zkSync mainnet)
//address constant DELEGATE_FACTORY = 0x9CC1599D4378Ea41d444642D18AA9Be44f709ffD; // Blasterswap (Blast mainnet)
//address constant DELEGATE_FACTORY = 0x25CbdDb98b35ab1FF77413456B31EC81A6B6B746; // Velodrome (Optimism mainnet)
//address constant DELEGATE_FACTORY = 0xfb926356BAf861c93C3557D7327Dbe8734A71891; // ModeSwap (Mode mainnet)

bytes constant DELEGATE_INIT_CODE_HASH = hex"e18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303"; // SushiSwap (all)
//bytes constant DELEGATE_INIT_CODE_HASH = hex"57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d"; // PancakeSwap (Linea mainnet)
//bytes constant DELEGATE_INIT_CODE_HASH = hex"0100045707a42494392b3558029b9869f865ff9df8f375dc1bf20b0555093f43"; // PancakeSwap (zkSync mainnet)
//bytes constant DELEGATE_INIT_CODE_HASH = hex"9895581041f0c2ea658b6c2e615187fa4eaa05e55ab576ce8164a1090d8e6575"; // Blasterswap (Blast mainnet)
//bytes constant DELEGATE_INIT_CODE_HASH = hex"c1ac28b1c4ebe53c0cff67bab5878c4eb68759bb1e9f73977cd266b247d149f0"; // Velodrome (Optimism mainnet)
//bytes constant DELEGATE_INIT_CODE_HASH = hex"337ec3ca78ed47c450332dd308033d9900832b31b7539f3befcbc556bff3a4a8"; // ModeSwap (Mode mainnet)

uint256 constant DELEGATE_NET_FEE = 9970; // SushiSwap
//uint256 constant DELEGATE_NET_FEE = 9975; // PancakeSwap
//uint256 constant DELEGATE_NET_FEE = 9970; // Blasterswap
//uint256 constant DELEGATE_NET_FEE = 9998; // Velodrome
//uint256 constant DELEGATE_NET_FEE = 9997; // ModeSwap

bool constant DELEGATE_CREATE2_ZKSYNC = false;
//bool constant DELEGATE_CREATE2_ZKSYNC = true;

bool constant DELEGATE_VELODROME = false;
//bool constant DELEGATE_VELODROME = true;
