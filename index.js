const express = require('express'); //agregas express a la variable
const app = express(); //para ejecutar express
var bodyParser = require('body-parser'); //gestionar peticiones post de objetos asociados
const db = require('./db/db'); //me traigo la base de datos
const router = require('./router'); //llamamos al archivo router

const PORT = 3000;  //puerto de conexion

app.use(express.json()); //indicamos al archivo express que utilice los archivos .JSON
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true}));//codificar la url
app.use(router);



//Conexión a base de datos y levantar servidor
// este callback llama al puerto para levantar el servidor y si falla envía un aviso
app.listen(PORT, ()=>{
    console.log(`El servidor esta up y alojado en el puerto => ${PORT}`);

    sequelize.authenticate().then(()=> {
        console.log("Conectado a la base de datos");
    }).catch(error => {
        console.log('Se ha producido un error: ' + error)
    })
});