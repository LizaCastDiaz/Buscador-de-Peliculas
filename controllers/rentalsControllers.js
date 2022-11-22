// //Importo modelo de datos
const { Rental } = require('../models/index');
const { Op } = require('sequelize'); // Import  all ORM sequelize functions
const router = require('express').Router();
const RentalsControllers = {};// object declaration



//CRUD END-POINTS FUNCTIONS 
// //------------------ .. ------------------


//ALL RENTALS 
RentalsControllers.getAllRentals = async (req, res) => {
    try {
        let resp = await Rental.findAll({
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
        console.log(err)
    }
}

//-------------------------------------------------------------------------------------
//LIST ALL THE ORDERS OF A USER
RentalsControllers.getRentalsFromUser = async (req, res) => {
    try {
        let email = req.params.email
        console.log(email)
        let resp = await User.findAll({
            where: { email: email },
            include: {
                model: Rental,
                attributes: ['id_rental', 'return_date', "rental_date"]
            },
            attributes: ['email', 'name']
        })
        res.send(resp)
    } catch (error) {
        res.send(error)
        console.log(error)
    }
}

//-------------------------------------------------------------------------------------
//GENERATE A NEW ORDER
RentalsControllers.NewRental = async (req, res) => {
    try {
        let data = req.body
        let resp = await Rental.create({
            email: data.email,
            return_date: new Date(),
            rental_date: new Date(),
            id_user: data.id_user,
            id_articles: data.id_articles


        })


        res.send(resp)
    } catch (error) {
        res.send(error)
    }
}

//-------------------------------------------------------------------------------------
//UPDATE ORDER by ID
RentalsControllers.updateRentalById = async (req, res) => {
    try {
        let data = req.body
        let resp = await Rental.update(
            {
                email: data.email,
                return_date: new Date(),
                rental_date: new Date(),
                id_user: data.id_user,
            },
            {
                where: { id_rental: data.id_rental }
            }
        )

        res.send(resp)

    } catch (err) {
        res.send(err)
    }
}


// //Export
module.exports = RentalsControllers;