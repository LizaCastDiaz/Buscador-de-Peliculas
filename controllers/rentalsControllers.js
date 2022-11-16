// //Importo modelo de datos
const models = require('../models/index');
const { Op } = require('sequelize'); // Import  all ORM sequelize functions
const router = require('express').Router();
const RentalsControllers = {};//UserController object declaration



// //CRUD end-points Functions
// //------------------ .. ------------------

// //GET all RENTALS
RentalsControllers.getRentals = (req, res) => {
    Rental.findAll()
    .then(data => {
    
        res.send(data)
    });
};



// //Generate a new order




 //Modify order data




 //List all orders of a user

 RentalsControllers.myRentals = async(req,res) => {
    const { authorization } = req.headers;
      try {
        let  id  = payrental.id_user;
        let resp = await models.rental.findAll({
          where: {
            id: useid,
          },
        });
        res.send(resp);
      }catch(error){
        res.send(error)
      }
  }



 //List all the orders made in the application (only the admin can do it)

RentalsControllers.wholeRentalsApp = async (req,res) => {
    try {
        let resp = await models.rental.findAll();
        res.send(resp);
    } catch (error) {
        res.send(error)
}
}



// //Export
module.exports = RentalsControllers;