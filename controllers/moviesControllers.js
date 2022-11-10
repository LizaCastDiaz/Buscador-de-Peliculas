//Import data models
const {movies} = require('../models/index')
const Op = db.Sequelize.Op; // Import  all ORM sequelize functions

const MoviesControllers = {}; //Create the object controller declaration


//CRUD END-POINTS FUNCTIONS 
//------------------ .. ------------------
//GET all movies from database
MoviesControllers.getAll = async (req, res) => {

    movies.findAll().then(data => {
        res.send(data);
    })
        .catch(err => {res.status(500).send({
        message: err.message || "Some error occurred while retrieving movies."});
    });
};


//GET movies by Id from database
MoviesControllers.getById = (req, res) => {
    const id = req.params.id;
    movies.findByPk(id).then(data => {
    
    if (data) {
        res.send(data);
    } else {res.status(404).send({
        message: `The movie with the ${id} is not avalible.`});
    }
    })
        .catch(err => {res.status(500).send({message: "Error"});
    });
};


//GET movies by Title
MoviesControllers.getByTitle = async (req, res) => {
    let title = req.params.title;
    let consult = `SELECT * FROM movies WHERE name LIKE '${title}'`;
    let result = await movies
        .sequelize
        .query(consult, {type: movies.sequelize.QueryTypes.SELECT});
    if (result != 0) {
        res.send(result)
    } else {
        res.send(`The movie ${title} is not available at Blockbuster database`)
    }
};

//GET  List of top rated movies.
MoviesControllers.getTopRatedMovie = async (req, res) => {
    let resp = await models.movies.findAll({
        where: {
            maxRate: {
                [Op.gt]: 9
            }
        }
    })
    res.send(resp);

}

//GET movies with a certain genre (indicating name, not id).
MoviesControllers.getByGenre = async (req, res) => {
    let genre = req.params.genre;
    let consult = `SELECT title, genre, release_date, rating, synopsis, director, duration FROM movies WHERE genre like '%${genre}%' ORDER BY name ASC`;
    let result = await movies.sequelize.query(consult, {type: movies.sequelize.QueryTypes.SELECT});
    if (result != 0) {
        res.send(result)
    } else {
        res.send(`The genre ${genre} is not available at the films database`)
    }
};

// Obtain Movies that are going to have a showing in theaters or cinemas.

MoviesControllers.getMoviesInTheaters = async (req,res) =>{

    try {
    let resp = await models.movies.findAll({
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