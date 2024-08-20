import { Keypair } from "@solana/web3.js";

const searchString = 'ABC';
var found = false; 
const maxIterations = 100000;
for (let index = 0; index < maxIterations; index++) {
    const keypair = Keypair.generate();
    const str1 = String(keypair.publicKey.toBase58());
    if (str1.indexOf(searchString) == 0) {
        console.log(`✅ Generated keypair starting with "${searchString}" in ${index+1} iterations!`)
        console.log('Public key: ', keypair.publicKey.toBase58());
        console.log('Secret key: ', keypair.secretKey)
        found = true;
        break;
    }
}
if (!found){
    console.log(`No string "${searchString}" found in ${maxIterations} iterations!`)
}
