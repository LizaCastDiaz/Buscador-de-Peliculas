const express = require('express'); //agregas express a la variable
const app = express(); //para ejecutar express
const colors = require('colors');
const morgan = require('morgan');
const db = require('./db/db'); //me traigo la base de datos
const router = require('./router.js');//llamamos al archivo router //puerto de conexion
const cors = require("cors"); // Import cors module


const PORT = process.env.PORT | 3000;  //puerto de conexion


//Config Cors Options
var corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  };

//Middleware
app.use(express.json()); //indicamos al archivo express que utilice los archivos .JSON
app.use(morgan('dev'));
app.use(cors(corsOptions)); //Add CORS Middleware



//Routers
app.use(router);
app.get('/', (req, res) => {res.send('Welcome');});


//Connecting to the database
app.listen(PORT, ()=>{
    console.log(`El servidor esta up y alojado en el puerto => ${PORT}`.bgGreen.red);
    // sequelize.sync({force:true})
    //db.authenticate()
    db.authenticate().then(()=> {
        console.log("Conectado a la base de datos");
    }).catch(error => {
        console.log('Se ha producido un error: ' + error)
    })
});