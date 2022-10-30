
const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');


const app = express();
//indicamos puerto de conexion
const PORT = 3000;

app.use(express.json());
app.use(router)


//Definimos la ruta raiz
app.get('/', (req, res) => {
    let date = new Date();
    console.log(`home route works ------  ${date}`);
    res.send('Bienvenidos a Express');
});

//Iniciamos el server
app.listen(port, () => {
    console.log(`Server on port ${port}`.bgGreen.black);
});