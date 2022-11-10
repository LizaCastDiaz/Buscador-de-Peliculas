//Importo modelo de datos
const models = require ('../models/index')
const Op = db.Sequelize.Op; // Import  all ORM sequelize functions
const SeriesControllers = {}; //Create the object controller



//CRUD end-points Functions
//------------------ .. ------------------
// Get top rated series.
SeriesControllers.getTopRatedSeries = async (req, res) => {
    let resp = await models.series.findAll({
        where: { 
            maxRate: {
                [Op.gt]: 9
            }
        }
    })
    res.send(resp);

}
// Get series by id.
SeriesControllers.getById = (req, res) => {
    const id = req.params.id;

    series.findByPk(id).then(data => {
    if (data) {
        res.send(data);
    } else {res.status(404).send({
        message: `The serie with the ${id} is not avalible`});
    }
    })
        .catch(err => {res.status(500).send({message: "Error"});
    });
};

// Get series by title.
SeriesControllers.getByTitle = async (req, res) => {
    let title = req.params.title;
    let consult = `SELECT * FROM series WHERE name LIKE '${title}'`;
    let result = await series
        .sequelize
        .query(consult, {type: series.sequelize.QueryTypes.SELECT});
    if (result != 0) {
        res.send(result)
    } else {
        res.send(`The series ${title} is not available at Blockbuster database`)
    }
};

//GET  List of top rated series.
SeriesControllers.getTopRatedSeries = async (req, res) => {
    let resp = await models.series.findAll({
        where: {
            maxRate: {
                [Op.gt]: 9
            }
        }
    })
    res.send(resp);
}

// Obtain series that are going to have an episode broadcast in the next 7 days.
SeriesControllers.getSeriesNewEpisode = async (req, res) => {
    try {
        let resp = await models.series.findAll({
            where: { new_episode: true}
            });
        res.send(resp);
    } catch (error) {
        res.send(error);
    }
}



//Export
module.exports = SeriesControllers;
