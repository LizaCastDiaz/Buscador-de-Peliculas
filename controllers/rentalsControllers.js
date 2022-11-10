//Importo modelo de datos
const models = require ('../models/index')
const Op = db.Sequelize.Op; // Import  all ORM sequelize functions
const RentalsControllers = {};//UserController object declaration



//CRUD end-points Functions
//------------------ .. ------------------

//GET all RENTALS
RentalsController.getAllRentals = (req, res) => {
    rental.findAll()
    .then(data => {
    
        res.send(data)
    });
};
//Generate a new order




//Modify order data




//List all orders of a user




//List all the orders made in the application (only the admin can do it)

RentalsController.wholeRentalsApp = async (req,res) => {
    try {
        let resp = await models.rental.findAll();
        res.send(resp);
    } catch (error) {
        res.send(error)
}
}



//Export
module.exports = RentalsControllers;