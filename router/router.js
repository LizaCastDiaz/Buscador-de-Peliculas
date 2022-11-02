const express = require('express')
const router = express.Router()

const userRouter = require('../views/userRouter')


//middleware para las rutas de usuario
router.use('/user', userRouter)