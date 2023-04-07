const ethers = require('ethers');
const readlineSync = require('readline-sync');

async function main() {

    let choice = readlineSync.question(`
        Выберите один из возможных провайдеров: 
        1. Default provider
        2. RPC provider
        3. API provider
    `)
    if (choice === '1') {
        let network = readlineSync.question('Укажите сеть: ');
        let provider = ethers.getDefaultProvider(network);
        await provider.getNetwork().then(console.log)
    } else if (choice === '2') {
        let network = readlineSync.question('Укажите точку подключения: ');
        provider = new ethers.providers.JsonRpcProvider(network);
        await provider.getNetwork().then(console.log)
    } else if (choice === '3') {
        let api = readlineSync.question('Укажите поставщика API: ');
        let network = readlineSync.question('Укажите сеть: ');
        let key = readlineSync.question('Укажите API ключ: ');
        if (api === 'Alchemy') {
            provider = new ethers.providers.AlchemyProvider(network, key);
        }
        await provider.getNetwork().then(console.log)
    }
}

main();