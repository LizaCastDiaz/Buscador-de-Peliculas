const express = require('express'); //agregas express a la variable
const app = express(); //para ejecutar express
const db = require('./db/db'); //me traigo la base de datos
const router = require('./router'); //llamamos al archivo router
// const { sequelize } = require('./models/index');
const PORT = 3000;  //puerto de conexion

app.use(express.json()); //indicamos al archivo express que utilice los archivos .JSON
app.use(router);


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