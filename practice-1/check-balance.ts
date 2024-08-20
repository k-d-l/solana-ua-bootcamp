import "dotenv/config";
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
console.log(`⚡️ Connected to devnet`);

const publicKey = new PublicKey("ABCvy3XBAJ74KoyHyV9MrEpPKtSXiyJ83y1xKhey4itd");
const balanceInLamports = await connection.getBalance(publicKey);
const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`💰 The balance for the wallet at address ${publicKey} is: ${balanceInSOL}`);

const recipientKey = new PublicKey("KstbtPJMBASgrjFQ9stPHfeQToYNwf4SrNZkMj1PmqL");
const recBalanceInLamports = await connection.getBalance(recipientKey);
const recBalanceInSOL = recBalanceInLamports / LAMPORTS_PER_SOL;

console.log(`💰 The balance for the recepient wallet at address ${recipientKey} is: ${recBalanceInSOL}`);
