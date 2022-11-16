const express = require('express');
const router = express.Router();


//Import data model
const RentalControllers = require('../controllers/rentalsControllers')


//CRUD END-POINTS FUNCTIONS 
//------------------ .. ------------------

//all RENTALS
//Generate a new order
//Modify order data
//List all orders of a user
//List all the orders made in the application (only the admin can do it)

//Export
module.exports = router