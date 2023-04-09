const ethers = require('ethers');
const readlineSync = require('readline-sync');

async function task_6() {
    let provider = new ethers.providers.JsonRpcProvider('https://eth-goerli.g.alchemy.com/v2/XdE1v9zVDSoRe6S5013cteykw1ZDC0u9');
    let address = readlineSync.question('Введите адрес: ');
    await provider.getBalance(address).then(console.log)

    const code = await provider.getCode(address);
    if (code === '0x') {
        console.log('Адрес не является смарт контрактом');
    } else {
        console.log('Адрес является смарт контрактом');
        const answer = readlineSync.question('Хотите вывести информацию о данных контракта, хранящихся в storage? (y/n): ');
        if (answer.toLowerCase() === 'y') {
            // Получаем ABI контракта
            console.log('ABI контракта: ');
            await provider.getCode(address).then(console.log)
            // Получаем значения из storage
            console.log('Значения в storage:');
            await provider.getStorageAt(address, 0).then(console.log)
        }
    }

}

task_6();