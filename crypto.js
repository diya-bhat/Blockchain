const {createHash} = require ('crypto')

// const create = createHash('sha256')
// create.update('Diya Bhat') //Its hashed
let Nonce = 0
let hash = ""
while (!hash.startsWith('00000')) {
    hash = createHash('sha256').update('Ritesh sent 10BTC to his mom' + Nonce).digest('hex') 
    Nonce++
}
console.log(hash)
console.log("Nonce: "+ (Nonce - 1))
