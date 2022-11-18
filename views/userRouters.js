const express = require('express');
const router = express.Router();
const auth = require('../middlewares/middlewaresAuth');

//Import data model
const UserControllers = require('../controllers/userControllers')
const {authBearerMiddleware} = require('../middlewares/middlewaresAuth');
const { authLoginController, authRegisterController } = require('../controllers/AuthController');



//CRUD END-POINTS FUNCTIONS 
//------------------ .. ------------------

//GET ALL USERS
router.get('/allUsers', UserControllers.getAll); //OK

//GET USER BY ID
router.get('/userId/:id', UserControllers.getById); //EMPTY ARRAY

//USER SIGNUP
router.post('/signUp', authRegisterController); 

//USER LOG IN
router.post('/signIn', authLoginController); 

//UPDATE USER PROFILE
router.patch('/updateUser/', authBearerMiddleware, UserControllers.updateUser); 

//DELETE USER (can only be done by the admin)
router.delete('/deleteUsers', UserControllers.deleteUser); 



//Export
module.exports = router