const express = require('express');
const router = express.Router();


//Import data model
const SeriesControllers = require('../controllers/seriesControllers')


//CRUD END-POINTS FUNCTIONS 

//------------------ .. ------------------

//GET all series from database
router.get('/allSeries', SeriesControllers.getAll);
//GET series by id.
router.get('/id/:id', SeriesControllers.getById);
//GET series by title.
router.get('/byTitle/:title', SeriesControllers.getByTitle);
//GET  List of top rated series.
router.get('/topRated', SeriesControllers.getTopRatedSeries);
//GET Obtain series that are going to have an episode broadcast in the next 7 days.
router.get('/byNewEpisode', SeriesControllers.getSeriesNewEpisode);
//Export
module.exports = router