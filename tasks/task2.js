const ethers = require('ethers');
const readlineSync = require('readline-sync');

async function task_2() {
    let provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:7545');
    console.log(' ===== инфо о Ganache ===== ');
    console.log('\n список аккаунтов: ');
    await provider.listAccounts().then(console.log);
    console.log('\n информация о сети: ');
    await provider.getNetwork().then(console.log);
    console.log('\n номер последнего блока: ');
    await provider.getBlockNumber().then(console.log);
    console.log('\n стоимость газа: ');
    await provider.getGasPrice().then(console.log);

    console.log('\n\n ===== инфо о Alchemi ===== ');
    let network = readlineSync.question('Укажите сеть: ');
    let key = readlineSync.question('Укажите API ключ: ');
    provider = new ethers.providers.AlchemyProvider(network, key);
    console.log('\n список аккаунтов: ');
    await provider.listAccounts().then(console.log);
    console.log('\n информация о сети: ');
    await provider.getNetwork().then(console.log);
    console.log('\n номер последнего блока: ');
    await provider.getBlockNumber().then(console.log);
    console.log('\n стоимость газа: ');
    await provider.getGasPrice().then(console.log);
}

task_2()