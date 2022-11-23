const express = require('express');
const router = express.Router();
//const auth = require('../middlewares/middlewaresAuth');
const { isValidRoleAdmin, authBearerMiddleware, isValidUser } = require("../middlewares/middlewaresAuth")

//Import data model
const UserControllers = require('../controllers/userControllers')


//CRUD END-POINTS FUNCTIONS 
//------------------ .. ------------------

//GET ALL USERS
router.get('/allUsers', authBearerMiddleware, isValidRoleAdmin, UserControllers.getAll); //OK

//GET USER BY ID
router.get('/userid/:id', authBearerMiddleware, isValidRoleAdmin, UserControllers.getById);

// //USER SIGNUP
// router.post('/signUp', UserControllers.signUp); 

// //USER LOG IN
// router.post('/signIn', UserControllers.signIn); 

//UPDATE USER PROFILE
router.patch('/updateUser/:email', authBearerMiddleware, isValidRoleAdmin, isValidUser, UserControllers.updateUser);

//DELETE USER (can only be done by the admin)
router.delete('/deleteUsers/:email', authBearerMiddleware, isValidRoleAdmin, UserControllers.deleteUser);



//Export
module.exports = router