const express = require('express');
const router = express.Router()



//Importamos Routes definidas en views
const MoviesRouters = require('./views/moviesRouters')
const SeriesRouters = require('./views/seriesRouters')
const RentalRouters = require('./views/rentalRouters')
const UserRouters = require('./views/userRouters')


//Routers
router.use('/movies', MoviesRouters);
router.use('/series', SeriesRouters);
router.use('/rental', RentalRouters);
router.use('/user', UserRouters)

//Export
module.exports = router;
