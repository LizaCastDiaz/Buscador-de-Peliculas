const express = require('express');
const app = express();
var bodyParser = require('body-parser'); //gestionar peticiones post de objetos asociados
const db = require('./db/db');
const router = require('./router'); //llamamos al archivo router

const PORT = 3000;  //puerto de conexion

app.use(express.json()); //indicamos al archivo express que utilice los archivos .JSON
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true}));//codificar la url
app.use(router);


app.listen(PORT, () =>{
    console.log(`servidor corriendo en el puerto ${PORT}`);
});