import Blockchain from "./blockchain.js"


const bitcoin = new Blockchain()
bitcoin.createNewBlock(24516, 'bcab3c9cce4df85f6772e4f0bdf1', 'bcab3c9352056c868077afea1b4c58c85')
bitcoin.createNewBlock(24510, 'bcab3c9cce4df2352056c868077af','bcab3c9cce4df85f677c58c85')
bitcoin.createNewBlock(24517, 'bcab3c9cce4df85f6772e5', 'bcab3c9cce4df885')

bitcoin.getLastBlock()

console.log(bitcoin)
