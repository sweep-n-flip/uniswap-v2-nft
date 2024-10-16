import {assertNotNull} from '@subsquid/util-internal'
import {
    BlockHeader,
    DataHandlerContext,
    EvmBatchProcessor,
    EvmBatchProcessorFields,
    Log as _Log,
    Transaction as _Transaction,
} from '@subsquid/evm-processor'
import * as fs from 'fs';
import * as path from 'path';

const networkConfig = JSON.parse(
    fs.readFileSync(
        path.resolve(__dirname, `../config/${process.env.NETWORK}.json`),
        'utf-8'
    )
);

export const processor = new EvmBatchProcessor()
    // Lookup archive by the network name in Subsquid registry
    // See https://docs.subsquid.io/evm-indexing/supported-networks/
    .setGateway(networkConfig.gatewayUrl)
    // Chain RPC endpoint is required for
    //  - indexing unfinalized blocks https://docs.subsquid.io/basics/unfinalized-blocks/
    //  - querying the contract state https://docs.subsquid.io/evm-indexing/query-state/
    .setRpcEndpoint({
        // Set the URL via .env for local runs or via secrets when deploying to Subsquid Cloud
        // https://docs.subsquid.io/deploy-squid/env-variables/
        url: networkConfig.rpcUrl,
        // More RPC connection options at https://docs.subsquid.io/evm-indexing/configuration/initialization/#set-data-source
        rateLimit: 10
    })
    .setFinalityConfirmation(75)
    .setFields({
        transaction: {
            from: true,
            value: true,
            hash: true,
        },
    })
    .setBlockRange({
        from: networkConfig.fromBlock,
    })
    .addTransaction({
        to: [networkConfig.contractAddress.factory, networkConfig.contractAddress.router],
    })
    .addTransaction({
        from: [networkConfig.contractAddress.factory, networkConfig.contractAddress.router],
    })

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
