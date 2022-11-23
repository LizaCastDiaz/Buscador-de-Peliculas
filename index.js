const express = require('express'); //you add express to the variable
const app = express(); //to run express
const colors = require('colors');
const morgan = require('morgan');
const logger = require('./config/wiston')
const db = require('./db/db'); //I bring the database
const router = require('./router.js');//we call the file router // connection port
//const cors = require("cors"); // Import cors module


const PORT = process.env.PORT | 3000;  //connection port


//Config Cors Options
// var corsOptions = {
//     origin: "*",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     preflightContinue: false,
//     optionsSuccessStatus: 204
//   };

//Middleware
app.use(express.json()); //we tell the express file to use the .JSON files
app.use(morgan('combined', { stream: logger.stream }));
// app.use(cors(corsOptions)); //Add CORS Middleware



//Routers
app.use(router);
app.get('/', (req, res) => { res.send('Welcome'); });


//Connecting to the database
app.listen(PORT, () => {
    console.log(`El servidor esta up y alojado en el puerto => ${PORT}`.bgGreen.red);
    // sequelize.sync({force:true})
    //db.authenticate()
    db.authenticate().then(() => {
        console.log("Conectado a la base de datos");
    }).catch(error => {
        console.log('Se ha producido un error: ' + error)
    })
});