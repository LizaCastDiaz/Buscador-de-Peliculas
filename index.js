const express = require('express'); //agregas express a la variable
const app = express(); //para ejecutar express
const db = require('./db/db'); //me traigo la base de datos
const router = require('./router'); //llamamos al archivo router
const PORT = process.env.PORT | 3000;  //puerto de conexion
//const cors = require("cors"); // Import cors module
//Config Cors Options
var corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  };

//Middleware
app.use(express.json()); //indicamos al archivo express que utilice los archivos .JSON
app.use(router);



//Routers
app.use(router);


//Connecting to the database
app.listen(PORT, ()=>{
    console.log(`El servidor esta up y alojado en el puerto => ${PORT}`);
    // sequelize.sync({force:true})
    //db.authenticate()
    db.authenticate().then(()=> {
        console.log("Conectado a la base de datos");
    }).catch(error => {
        console.log('Se ha producido un error: ' + error)
    })
});