require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food eight rice nominee combine install infant slot gaze'; 
let testAccounts = [
"0x6890fcf8381120c46dca8c2498892189ca60feb5d518b1b4d82e07f32381b9da",
"0x4ff6b271b582dbd141e3be37c1bc02de49b3e043d2c154f5cf9871d15c839ad5",
"0x285fc1950f13e4a40c5e6da56279289b2e1debee795417e3891fc163e18187b6",
"0xb461f99bac462b674b929f87049d91d2dbef5ab896024f023e486bc8664a7e95",
"0x3c59d15ec75ca41a76e0ce6befca5225b0f175ba6ab1a4de553b881fb99b19e9",
"0xb5a849da85d558ea25e3b5ddaaf38c7bc3c2583440c02993d5bf452e86365fc8",
"0x4441e3bd9d8640a3198fe45759fcd55ca7758b96306f4f778ad97fa735bab43e",
"0x64b71d0e3ea7825eb56b1428e23c55ea0f4aba1e044b503bb3719027307655d6",
"0x6bd8c22c0db5615e0cea9acf4b6e147ab3c5728f7df3e8039628fccf7d665ea8",
"0xae8468f2dfb92474a65ca426de68f995b227cf431b3983cda15ebf623f8c130b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

