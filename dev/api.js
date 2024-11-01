import express from 'express'
import bodyParser from 'body-parser'
import Blockchain from './blockchain.js'

const app = express()
const bitcoin = new Blockchain()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.get('/blockchain', function (req, res) {
  res.send(bitcoin)
})

app.post('/transaction', function(req, res){
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient)
    res.json({ note: `Transaction will be added in block ${blockIndex}.`})
})

app.get('/mine', function(req, res){

})





app.listen(3000, function(){
    console.log('Listening on port 3000')
})