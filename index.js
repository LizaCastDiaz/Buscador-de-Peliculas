const express = require('express');
const app = express();
const db = require('./db/db');
const router = require('./router'); //llamamos al archivo router
const PORT = 3000;  //puerto de conexion

app.use(express.json()); //indicamos al archivo express que utilice los archivos .JSON

app.use(router);


app.listen(PORT, () =>{
    console.log(`servidor corriendo en el puerto ${PORT}`);
});