//Import data models
const models = require('../models/index');
const { Op } = require('sequelize'); // Import  all ORM sequelize functions
const router = require('express').Router();
const MoviesControllers = {}; //Create the object controller declaration


//CRUD END-POINTS FUNCTIONS 
//------------------ .. ------------------

//GET all movies 
MoviesControllers.getAll = async (req, res) => {

    models.Movies.findAll().then(data => {
        res.send(data);
    })
        .catch(err => {res.status(500).send({
        message: err.message || "Some error occurred while retrieving movies."});
    });
};


//GET movies by Id 
MoviesControllers.getMoviesById = async (req, res) => {
try {
    let { id } = req.params;
    let resp = await models.Movies.findAll({
      where: {
        id_movies: id,
      },
    });
    res.send(resp);
  } catch (error) {
    res.send(error);
  }
};
// MoviesControllers.getMoviesById = async (req, res) => {
//     try {
//       let { id } = req.params;
//       let resp = await models.movies.findAll({
//         where: {
//           id_movies: id,
//         },
//       });
//       res.send(resp);
//     } catch (error) {
//       res.send(error);
//     }
//   };
  


//GET movies by Title
MoviesControllers.getByTitle = async (req, res) => {
    let resp = await models.Movies.findAll({ 
        where: { 
            title: {[Op.like]: "%"+req.params.title+"%"}
        }
     });
    res.send(resp);
}

//GET  List of top rated movies.
MoviesControllers.getTopRatedMovie = async (req, res) => {
    let resp = await models.Movies.findAll({
        where: {
            rating: {
                [Op.gt]: 9
            }
        }
    })
    res.send(resp);

}

//GET movies with a certain genre (indicating name, not id).
MoviesControllers.getMoviesByGenre = async (req, res) => {
    let resp = await models.Movies.findAll({ 
        where: { 
            genre:{[Op.like]: "%"+req.params.genre+"%"}
        }
     });
    res.send(resp);
}

// Obtain Movies that are going to have a showing in theaters or cinemas.

MoviesControllers.getMoviesInTheaters = async (req,res) =>{

    try {
    let resp = await models.Movies.findAll({
        where:{
            in_theters: true
                }
            }
        );
        res.send(resp);
    } catch (error) {
        res.send(error);        
}}


//Export
module.exports = MoviesControllers;