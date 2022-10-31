const express = require("express");
const app = express();
const db = require('./db/db')
const router = require('./router/router')

const PORT = 3000;

app.use(express.json());


const bodyParser = require('body-parser');
const colors = require('colors');


app.listen(PORT, () => {     
    console.log(`Servidor conectado en el puerto  ${PORT}`);     
    db.authenticate().then(()=> {         
        console.log("Conectado a la base de datos");     
    }).catch(error => {         
        console.log('No se ha conectado a la base de datos' + error)     
    })
    
});























