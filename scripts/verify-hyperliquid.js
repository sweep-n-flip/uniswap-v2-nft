const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

// Configuração da Hyperliquid Mainnet
const HYPERLIQUID_CONFIG = {
  chainId: 999,
  apiUrl: 'https://api.etherscan.io/v2/api',
  contractAddress: '0xe8c88a8f5ccfc552a1bf556561ef876b65e231bc',
  contractName: 'UniswapV2Pair_flattened.sol:UniswapV2Pair',
  compilerVersion: 'v0.8.20+commit.a1b79de6',
  optimizationEnabled: 1,
  runs: 222,
  evmVersion: 'paris'
};

// Carrega API Key do etherscan.json
let apiKey;
try {
  const etherscanConfig = JSON.parse(fs.readFileSync('./etherscan.json', 'utf8'));
  apiKey = etherscanConfig.hyperliquid;
  if (!apiKey) {
    throw new Error('API key para Hyperliquid não encontrada em etherscan.json');
  }
} catch (error) {
  console.error('❌ Erro ao carregar API key:', error.message);
  process.exit(1);
}

async function verifyContract() {
  try {
    console.log('🚀 Iniciando verificação do contrato na Hyperliquid Mainnet...');
    console.log('='.repeat(60));
    console.log(`📋 Contrato: ${HYPERLIQUID_CONFIG.contractAddress}`);
    console.log(`⚙️  Chain ID: ${HYPERLIQUID_CONFIG.chainId}`);
    console.log(`🔧 Compiler: ${HYPERLIQUID_CONFIG.compilerVersion}`);
    console.log(`🎛️  Optimization: ${HYPERLIQUID_CONFIG.runs} runs`);
    console.log('='.repeat(60));

    // Lê o código fonte flattened
    const sourceCode = fs.readFileSync('./UniswapV2Pair_flattened.sol', 'utf8');
    
    // Prepara os dados para o POST usando FormData
    const formData = new FormData();
    formData.append('chainid', HYPERLIQUID_CONFIG.chainId.toString());
    formData.append('module', 'contract');
    formData.append('action', 'verifysourcecode');
    formData.append('apikey', apiKey);
    formData.append('codeformat', 'solidity-single-file');
    formData.append('sourceCode', sourceCode);
    formData.append('contractaddress', HYPERLIQUID_CONFIG.contractAddress);
    formData.append('contractname', HYPERLIQUID_CONFIG.contractName);
    formData.append('compilerversion', HYPERLIQUID_CONFIG.compilerVersion);
    formData.append('optimizationUsed', HYPERLIQUID_CONFIG.optimizationEnabled.toString());
    formData.append('runs', HYPERLIQUID_CONFIG.runs.toString());
    formData.append('evmversion', HYPERLIQUID_CONFIG.evmVersion);
    formData.append('licenseType', '3'); // MIT License

    console.log('📤 Enviando solicitação de verificação...');

    // Faz a requisição POST
    const response = await axios.post(HYPERLIQUID_CONFIG.apiUrl, formData, {
      headers: {
        ...formData.getHeaders(),
        'Content-Type': 'multipart/form-data'
      },
      timeout: 30000 // 30 segundos de timeout
    });

    console.log('📥 Resposta recebida:', response.data);

    if (response.data.status === '1') {
      const guid = response.data.result;
      console.log('✅ Verificação enviada com sucesso!');
      console.log(`📋 GUID: ${guid}`);
      console.log('⏳ Aguardando verificação...');
      
      // Monitora o status da verificação
      await checkVerificationStatus(guid);
      
    } else {
      console.error('❌ Erro na verificação:', response.data.result);
      process.exit(1);
    }

  } catch (error) {
    console.error('❌ Erro durante a verificação:', error.message);
    if (error.response) {
      console.error('📊 Status:', error.response.status);
      console.error('📋 Dados:', error.response.data);
    }
    process.exit(1);
  }
}

async function checkVerificationStatus(guid) {
  const maxAttempts = 20;
  let attempts = 0;
  
  while (attempts < maxAttempts) {
    try {
      console.log(`🔄 Verificando status... (tentativa ${attempts + 1}/${maxAttempts})`);
      
      const statusResponse = await axios.get(HYPERLIQUID_CONFIG.apiUrl, {
        params: {
          chainid: HYPERLIQUID_CONFIG.chainId,
          module: 'contract',
          action: 'checkverifystatus',
          guid: guid,
          apikey: apiKey
        }
      });

      console.log('📊 Status atual:', statusResponse.data);

      if (statusResponse.data.status === '1') {
        if (statusResponse.data.result === 'Pass - Verified') {
          console.log('🎉 CONTRATO VERIFICADO COM SUCESSO!');
          console.log(`🔗 Link: https://hyperevmscan.io/address/${HYPERLIQUID_CONFIG.contractAddress}`);
          return;
        } else if (statusResponse.data.result.includes('Fail')) {
          console.error('❌ Verificação falhou:', statusResponse.data.result);
          return;
        } else if (statusResponse.data.result === 'Pending in queue') {
          console.log('⏳ Verificação na fila...');
        } else {
          console.log('🔄 Status:', statusResponse.data.result);
        }
      }

      attempts++;
      if (attempts < maxAttempts) {
        console.log('⏱️  Aguardando 10 segundos...');
        await new Promise(resolve => setTimeout(resolve, 10000));
      }

    } catch (error) {
      console.error('❌ Erro ao verificar status:', error.message);
      attempts++;
    }
  }

  console.log('⚠️  Timeout atingido. Verificação pode ainda estar em andamento.');
  console.log(`🔍 Verifique manualmente em: https://hyperevmscan.io/address/${HYPERLIQUID_CONFIG.contractAddress}`);
}

// Informações do contrato
console.log('📄 INFORMAÇÕES DO CONTRATO UNISWAPV2PAIR');
console.log('==========================================');
console.log('📝 Nome: UniswapV2Pair');
console.log('🏷️  LP Token: "SweepnFlip LPs" (SNF-LP)');
console.log('💰 Taxa de Trading: 0.2%');
console.log('🔒 Minimum Liquidity: 1000 wei');
console.log('🎯 Suporta Tokens Discretos: Sim (para NFT wrappers)');
console.log('==========================================\n');

// Executa a verificação
verifyContract();
