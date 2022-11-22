const express = require('express');
const router = express.Router();


//Import data model
const MoviesControllers = require('../controllers/moviesControllers')


//CRUD END-POINTS FUNCTIONS 
//------------------ .. ------------------

//All movies
router.get('/allMovies', MoviesControllers.getAll); //OK
//GET By ID
router.get('/id/:id', MoviesControllers.getMoviesById); //OK
//GET movies by Title
router.get('/byTitle/:title', MoviesControllers.getByTitle); //OK
//GET  List of top rated movies.
router.get('/topRated', MoviesControllers.getTopRatedMovie); //OK
//GET movies with a certain genre (indicating name, not id).
router.get('/genre/:genre', MoviesControllers.getMoviesByGenre);//OK
// Obtain Movies that are going to have a showing in theaters or cinemas.
router.get('/inTheters', MoviesControllers.getMoviesInTheaters); //OK

//Export
module.exports = router