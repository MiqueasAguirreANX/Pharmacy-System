const express = require('express')
const app = express()

const PORT = 5050;

app.use(express.json())
app.use(express.static(__dirname + '/public'));

app.get('', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(PORT, ()=>{
    console.log("Vista corriendo en ", PORT)
})