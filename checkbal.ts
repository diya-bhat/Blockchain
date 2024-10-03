const {Connection, LAMPORTS_PER_SOL, PublicKey} = require('@solana/web3.js')

const public_key = new PublicKey("CmN23v8H2dNgT6N32bN6hh6EouNnQkNpZnKDHSP7UkJf")

//const public_key = new PublicKey("9oArELexQL5kVf5qeRNq75MRmUgKDrcupYNhPZuWftZj")
const connection = new Connection("https://api.devnet.solana.com", "confirmed") //connects to the server

const chck_bal = await connection.getBalance(public_key);

console.log(chck_bal / LAMPORTS_PER_SOL)

 
