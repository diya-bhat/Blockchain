const { Keypair } = require("@solana/web3.js");
const keypair = Keypair.generate();

const bs58=require("bs58")

console.log('The public key is: ', keypair.publicKey.toBase58());
console.log('The secret key is: ', bs58.encode(keypair.secretKey));