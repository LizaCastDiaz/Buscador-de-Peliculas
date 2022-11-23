// //Importo modelo de datos
const models = require('../models/index');
const Rentals = require('../models/index');
const { Op } = require('sequelize'); // Import  all ORM sequelize functions

const router = require('express').Router();

const RentalsControllers = {};// object declaration



//CRUD END-POINTS FUNCTIONS 
// //------------------ .. ------------------


// //ALL RENTALS 
RentalsControllers.getAllRentals = async (req, res) => {
    try {
        let resp = await models.Rentals.findAll({});
        res.send(resp);
    } catch (error) {
        res.send(`${error}`);
    }
}


//-------------------------------------------------------------------------------------
//LIST ALL THE RENTAL OF A USER
RentalsControllers.getRentalsFromUser = async (req, res) => {
    try {
        let email = req.params.email
        console.log(email)
        let resp = await models.Rentals.findAll({
            where: { email: email },
            attributes: ['email', 'id_user']
        })
        res.send(resp)
    } catch (error) {
        res.send(error)
        console.log(error)
    }
}




//-------------------------------------------------------------------------------------
//GENERATE A NEW RENTAL
RentalsControllers.NewRental = async (req, res) => {
    try {
        let data = req.body
        let resp = await Rentals.create({
            email: data.email,
            return_date: new Date(),
            rental_date: new Date(),
            id_user: data.id_user,
            id_articles: data.ArticlesIdArticles


        })


        res.send(resp)
    } catch (error) {
        res.send(error)
    }
}

//-------------------------------------------------------------------------------------
//UPDATE RENTAL by ID
RentalsControllers.updateRentalById = async (req, res) => {
    try {
        let data = req.body
        let resp = await Rentals.update(
            {
                email: data.email,
                return_date: new Date(),
                rental_date: new Date(),
                id_user: data.id_user,
                id_articles: data.id_articles
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