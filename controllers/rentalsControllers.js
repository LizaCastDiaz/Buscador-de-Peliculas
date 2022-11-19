// //Importo modelo de datos
const {Rental} = require('../models/index');
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
  try{
      let email = req.params.email
      console.log(email)
      let resp = await User.findAll({
          where: { email: email},
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
          startedAt: data.startedAt,
          endedAt: data.endedAt,
          userMail: data.userMail,
          articleIdArticle: data.articleIdArticle

      })

      res.send(resp)
  } catch (error) {
      res.send(error)
  }
}

//-------------------------------------------------------------------------------------
//MODIFY ORDER by ID
RentalsControllers.updateRentalById = async (req, res) => {
  try {
      let data = req.body
      let resp = await Rental.update(
          {
              startedAt: data.startedAt,
          endedAt: data.endedAt,
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