//connected to the server

const {
    Connection,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
    PublicKey,
  } = require("@solana/web3.js");
  require("dotenv").config()
  const { getKeypairFromEnvironment } = require("@solana-developers/helpers");
   
  const suppliedToPubkey = process.argv[2] || null;
  //process.argv[2] accesses the public key from the command line interface
  //npx esrun [0 index] .\send_money.ts [1 index] CmN23v8H2dNgT6N32bN6hh6EouNnQkNpZnKDHSP7UkJf [2 index]
   
  if (!suppliedToPubkey) {
    console.log("Please provide a public key to send to");
    process.exit(1);
  }
   
  const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");
   
  console.log(`suppliedToPubkey: ${suppliedToPubkey}`);
   
  const toPubkey = new PublicKey(suppliedToPubkey);
   
  const connection = new Connection("https://api.devnet.solana.com", "confirmed");
   
  console.log(
    `✅ Loaded our own keypair, the destination public key, and connected to Solana,`
  );

  const transaction = new Transaction();
 
const LAMPORTS_TO_SEND = 1;
 
const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: senderKeypair.publicKey,
  toPubkey,
  lamports: LAMPORTS_TO_SEND,
});
 
transaction.add(sendSolInstruction);
 
const signature = await sendAndConfirmTransaction(connection, transaction, [
  senderKeypair,
]);
 
console.log(
  `💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}. `,
);
console.log(`Transaction signature is ${signature}!`);