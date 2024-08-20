import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();
const str1 = String(keypair.publicKey.toBase58());
const searchString = 'A';

if (str1.indexOf(searchString) >=0) {
    console.log( "true:"+ keypair.publicKey.toBase58());
} else {
    console.log( "false:"+ keypair.publicKey.toBase58());
}

console.log(`✅ Generated keypair!`)
console.log('Public key: ', keypair.publicKey.toBase58());
console.log('Secret key: ', keypair.secretKey)
