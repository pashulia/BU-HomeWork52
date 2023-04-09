const ethers = require('ethers');
const readlineSync = require('readline-sync');

async function task_4() {
    let provider = new ethers.providers.JsonRpcProvider('https://eth-goerli.g.alchemy.com/v2/XdE1v9zVDSoRe6S5013cteykw1ZDC0u9');

    let transactionRequest = {};
    transactionRequest.from = readlineSync.question('Введите адрес отправителя: ');
    transactionRequest.to = readlineSync.question('Введите адрес получателя: ');
    transactionRequest.value = readlineSync.question('Введите сумму эфира: ');

    let choice = readlineSync.question(`
        Хотите вызвать функцию контракта? : 
        1. Да, хочу вызвать функцию контракта
        2. Нет, не хочу вызывать функцию контракта
    `)
    if (choice === '1') {
        transactionRequest.data = readlineSync.question('Введите данные: ');
    }

    const feedata = await provider.getFeeData();
    transactionRequest.maxFeePerGas = feedata.maxFeePerGas;
    transactionRequest.maxPrioretyFeePerGas = feedata.maxPriorityFeePerGas;
    transactionRequest.chainId = (await provider.getNetwork()).chainId;
    transactionRequest.nonce = await provider.getTransactionCount(transactionRequest.from);
    console.log(transactionRequest);

    await provider.estimateGas(transactionRequest).then(console.log)
}

task_4();