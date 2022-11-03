const express = require('express');
const app = express();
const router = require('./router');
const PORT = 3000;
app.use(express.json());
app.use(router);


app.listen(PORT, () =>{
    console.log(`servidor corriendo en el puerto ${PORT}`);
});