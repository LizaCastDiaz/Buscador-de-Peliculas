// //Importo modelo de datos
const models = require('../models/index');
const { Op, Sequelize } = require('sequelize'); // Import  all ORM sequelize functions
const router = require('express').Router();
const SeriesControllers = {}; //Create the object controller


//CRUD END-POINTS FUNCTIONS 
//------------------ .. ------------------

// Get all series.
SeriesControllers.getAll = async (req, res) => {

    models.Series.findAll().then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving series."
            });
        });
};

//-------------------------------------------------------------------------------------
// Get series by id.  
SeriesControllers.getById = async (req, res) => {
    try {
        let { id } = req.params;
        let resp = await models.Series.findAll({
            where: {
                id_series: id,
            },
        });
        res.send(resp);
    } catch (error) {
        res.send(error);
    }
};

//-------------------------------------------------------------------------------------
// Get series by title.
SeriesControllers.getByTitle = async (req, res) => {
    let resp = await models.Series.findAll({
        where: {
            title: { [Op.like]: "%" + req.params.title + "%" }
        }
    });
    res.send(resp);
}

//-------------------------------------------------------------------------------------
//GET  List of top rated series.
SeriesControllers.getTopRatedSeries = async (req, res) => {
    let resp = await models.Series.findAll({
        where: {
            rating: {
                [Op.gt]: 9
            }
        }
    })
    res.send(resp);

}


//-------------------------------------------------------------------------------------

// Obtain series that are going to have an episode broadcast in the next 7 days.
SeriesControllers.getSeriesNewEpisode = async (req, res) => {
    try {
        let resp = await models.Series.findAll({
            where: {
                new_episode: true
            }
        }
        );
        res.send(resp);
    } catch (error) {
        res.send(error);
    }
}



// //Export
module.exports = SeriesControllers;
