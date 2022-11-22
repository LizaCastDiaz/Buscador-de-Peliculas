const express = require('express');
const router = express.Router();

const { isValidRoleAdmin, authBearerMiddleware, isValidUser } = require("../middlewares/middlewaresAuth")


//Import data model
const RentalsControllers = require('../controllers/rentalsControllers')


//CRUD END-POINTS FUNCTIONS 
//------------------ .. ------------------


//GET ALL RENTALS (only admin)
router.get('/rentals/getAll', authBearerMiddleware, isValidRoleAdmin, RentalsControllers.getAllRentals);
//GET a LIST ALL THE ORDERS OF A USER
router.get('/rentals/:email', authBearerMiddleware, isValidUser, RentalsControllers.getRentalsFromUser);
//POST GENERATE A NEW ORDER
router.post('/rentals/newRental', authBearerMiddleware, RentalsControllers.NewRental);
//MODIFY ORDER
router.put('/update/:id_order', authBearerMiddleware, isValidRoleAdmin, RentalsControllers.updateRentalById);


//Export
module.exports = router