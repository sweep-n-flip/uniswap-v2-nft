#!/bin/sh
npm run clean && npm run set:mainnet && npm run codegen && npm run build && npm run deploy:studio
npm run clean && npm run set:ropsten && npm run codegen && npm run build && npm run deploy:studio
npm run clean && npm run set:rinkeby && npm run codegen && npm run build && npm run deploy:studio
npm run clean && npm run set:kovan && npm run codegen && npm run build && npm run deploy:studio
npm run clean && npm run set:goerli && npm run codegen && npm run build && npm run deploy:studio
npm run clean && npm run set:avaxmain && npm run codegen && npm run build && npm run deploy:studio
npm run clean && npm run set:avaxtest && npm run codegen && npm run build && npm run deploy:studio
npm run clean && npm run set:bscmain && npm run codegen && npm run build && npm run deploy:studio
npm run clean && npm run set:bsctest && npm run codegen && npm run build && npm run deploy:studio
npm run clean && npm run set:ftmmain && npm run codegen && npm run build && npm run deploy:studio
#npm run clean && npm run set:ftmtest && npm run codegen && npm run build && npm run deploy:studio
npm run clean && npm run set:maticmain && npm run codegen && npm run build && npm run deploy:studio
npm run clean && npm run set:matictest && npm run codegen && npm run build && npm run deploy:studio
