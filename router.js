const express = require('express');
const router = express.Router()

// Middlewares
const auth = require('./middlewares/middlewaresAuth');


//Importamos Routes definidas en views
const MoviesRouters = require('./views/moviesRouters')
const SeriesRouters = require('./views/seriesRouters')
const RentalRouters = require('./views/rentalRouters')
const UserRouters = require('./views/userRouters')


//Routers
router.use('/movies', MoviesRouters);
router.use('/series', SeriesRouters);
router.use('/rental', auth, RentalRouters);
router.use('/user', UserRouters)

//Export
module.exports = router;
