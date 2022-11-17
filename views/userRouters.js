const express = require('express');
const router = express.Router();
const auth = require('../middlewares/middlewaresAuth');

//Import data model
const UserControllers = require('../controllers/userControllers')


//CRUD END-POINTS FUNCTIONS 
//------------------ .. ------------------

//GET ALL USERS
router.get('/allUsers', UserControllers.getAll); 

//GET USER BY ID
router.get('/getById', UserControllers.getById); 

//USER SIGNUP
router.post('/signUser', UserControllers.signUp); 

//USER LOG IN
router.post('/signIn', UserControllers.signIn); 

//MODIFY USER PROFILE
router.patch('/allUsers', UserControllers.updateUser); 

//DELETE USER (can only be done by the admin)
router.delete('/deleteUsers', UserControllers.deleteUser); 



//Export
module.exports = router