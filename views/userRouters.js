const express = require('express');
const router = express.Router();
const auth = require('../middlewares/middlewaresAuth');

//Import data model
const UserControllers = require('../controllers/userControllers')


//CRUD END-POINTS FUNCTIONS 
//------------------ .. ------------------

//GET ALL USERS
router.get('/allUsers', UserControllers.getAll); //OK

//GET USER BY ID
router.get('/userId/:id', UserControllers.getById); //EMPTY ARRAY

//USER SIGNUP
router.post('/signUp', UserControllers.signUp); 

//USER LOG IN
router.post('/signIn', UserControllers.signIn); 

//UPDATE USER PROFILE
router.patch('/updateUser', UserControllers.updateUser); 

//DELETE USER (can only be done by the admin)
router.delete('/deleteUsers', UserControllers.deleteUser); 



//Export
module.exports = router