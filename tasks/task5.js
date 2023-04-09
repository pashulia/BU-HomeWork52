const ethers = require('ethers');
const readlineSync = require('readline-sync');

async function task_5() {
    let provider = new ethers.providers.JsonRpcProvider('https://eth-goerli.g.alchemy.com/v2/XdE1v9zVDSoRe6S5013cteykw1ZDC0u9');
    let blockNumber = parseInt(readlineSync.question('Введите номер блока: '));
    let transactions = (await provider.getBlockWithTransactions(blockNumber)).transactions;
    let maxValue = 0;
    let maxTx = 0;
    for (tx of transactions) {
        if (tx.value > maxValue) {
            maxValue = tx.value;
            maxTx = tx;
        }
    }
    console.log(maxTx);
}

task_5();