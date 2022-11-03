const express = require("express");
const app = express();
const PORT = 3000;
const router = require('./router');


//middlewares
app.use(express.json()); //PUEDO OBTENER JSON DEL BODY
app.use(router);



//Servidor en escucha. Conectado a la base de datos
app.listen(PORT, () => {     
    console.log(`Servidor conectado en el puerto  ${PORT}`);     
    db.authenticate().then(()=> {         
        console.log("Conectado a la base de datos");     
    }).catch(error => {         
        console.log('No se ha conectado a la base de datos' + error)     
    })
    
});

// const morgan = require('morgan');
// const models = require('./models/index');
// const sequelize = require('./db/db');
// const db = require('./db/db');


// const bodyParser = require('body-parser');
// const colors = require('colors');






















