const express = require('express');
const router = express.Router();


//Import data model
const SeriesControllers = require('../controllers/seriesControllers')


//CRUD END-POINTS FUNCTIONS 

//------------------ .. ------------------

//GET all series from database
router.get('/allSeries', SeriesControllers.getAll); //OK
//GET series by id.
router.get('/id/:id', SeriesControllers.getById); //OK
//GET series by title.
router.get('/byTitle/:title', SeriesControllers.getByTitle);//OK
//GET  List of top rated series.
router.get('/topRated', SeriesControllers.getTopRatedSeries); //EMPTY ARRAY
//GET Obtain series that are going to have an episode broadcast in the next 7 days.
router.get('/byNewEpisode', SeriesControllers.getSeriesNewEpisode); //EMPTY ARRAY
//Export
module.exports = router