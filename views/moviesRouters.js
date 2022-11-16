const express = require('express');
const router = express.Router();


//Import data model
const MoviesControllers = require('../controllers/moviesControllers')


//CRUD END-POINTS FUNCTIONS 
//------------------ .. ------------------

//All movies
router.get('/allMovies', MoviesControllers.getAll);
//GET By ID
router.get('/id/:id', MoviesControllers.getMoviesById) //its not working
//GET movies by Title
router. get('/byTitle/:title', MoviesControllers.getByTitle);
//GET  List of top rated movies.
router.get('/topRated', MoviesControllers.getTopRatedMovie);
//GET movies with a certain genre (indicating name, not id).
router.get('/genre/:genre', MoviesControllers.getMoviesByGenre);
// Obtain Movies that are going to have a showing in theaters or cinemas.
router.get('/inTheters', MoviesControllers.getMoviesInTheaters); 

//Export
module.exports = router