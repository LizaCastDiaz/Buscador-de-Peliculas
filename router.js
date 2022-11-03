const express = require('express')
const router = express.Router()

const UserRouter = require('./views/UserRouter')


//middleware para las rutas de usuario
router.use('/user', UserRouter);


module.exports = router;