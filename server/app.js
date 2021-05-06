const express = require('express');
const morgan = require('morgan');
const cors = require("cors");

const app = express();
const router = require('./routes/items')
const PORT = 4580;

app.use(express.json());
app.use(morgan('dev'))
app.use(cors());

app.use('/api', router)

app.listen(PORT, () =>{
    console.log('Servidor escuchando en el puerto ', PORT)
});





