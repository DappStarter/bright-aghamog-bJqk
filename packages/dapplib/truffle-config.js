require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift radar oval around hope kite slot gift'; 
let testAccounts = [
"0x00d6083d09cf2127047dd2915ec70807786fa02d8afbf7872850c14f2c82d93b",
"0x7f5d7df74f5bb6ddb910377bc420cd133ddb418c0f4acbab49e576cebbabcf37",
"0x7eb72e90ef4988ee6f0af0442ba283f8a4d830f9dddae8643598b1904b1dbf40",
"0x9af0c61b56b27865aa2a172cdbe4abd3e6663a749108540638bd6d9bf48591fb",
"0xd13671b1c0a28e2ba20892c97d572ac74b5420c00c32047f17de7e7e5ebc5472",
"0xe6b53c5372c6b1efba4c0f2db2c3392d07f917b2b4855c4a7f6f4060847855f3",
"0xa54e049a39396af5eeddffb7fd7ecd7163a97646440c893c12c078381af0a4ae",
"0x78732f2ef5dbfc5bb876c06366b66c9c2d259666e5b2bdfec5c4bc9ca2d472e9",
"0x62da1440e694643e7a54c39ee67a30d3569fc51a0d49458cdf8bcb558c1ab922",
"0xc755a07051558b37f4904b9b481c1550829889acbd0ebfc2be121be778c041d4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


