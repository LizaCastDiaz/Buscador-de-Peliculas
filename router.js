const express = require('express');
const router = express.Router()

// Middlewares
const auth = require('./middlewares/middlewaresAuth');


//Importamos Routes definidas en views
const MoviesRouters = require('./views/moviesRouters')
const SeriesRouters = require('./views/seriesRouters')
const RentalRouters = require('./views/rentalRouters')
const UserRouters = require('./views/userRouters')
const authRoutes = require("./views/authRoutes")


//Routers
router.use('/movies', MoviesRouters);
router.use('/series', SeriesRouters);
router.use('/rental', RentalRouters);
router.use('/user', UserRouters);
router.use("/auth",authRoutes);

//Export
module.exports = router;
