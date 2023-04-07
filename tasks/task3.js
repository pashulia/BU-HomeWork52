const ethers = require('ethers');
const readlineSync = require('readline-sync');

async function task_3() {
    let provider = new ethers.providers.JsonRpcProvider('https://eth-goerli.g.alchemy.com/v2/XdE1v9zVDSoRe6S5013cteykw1ZDC0u9');
    let hash = readlineSync.question('Введите хэш транзакции: ');
    await provider.getTransaction(hash).then(console.log);
}

task_3();