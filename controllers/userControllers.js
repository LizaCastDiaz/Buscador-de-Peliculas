//Importo modelo de datos
const models = require ('../models/index')
const Op = db.Sequelize.Op; // Import  all ORM sequelize functions
const UserControllers = {}; //Create the object controller


//CRUD end-points Functions
//GET
UserControllers.getUsers = (req, res) => {
    User.findAll()
    .then(data => {
    
        res.send(data)
    });
};


//User Signup
UserControllers.signUp = async (req, res) => {
    console.log(req.body);
    const userSignUp = await User.create({
      name: req.body.name,
      surname: req.body.surname,
      document: req.body.document,
      email: req.body.email,
      password: req.body.password,
    }).catch((err) => {
      res.status(500).json(err);
    });
    res.json(userSignUp);
  };
  

//Log in
UserControllers.logIn = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

}


//Modify user profile data





//Delete a user (can only be done by the admin)

UserControllers.deleteUser = async (req, res) => {
    const { email } = req.params;
    let resp = await models.users.destroy({
        where: {
            email: email
    }
    })
    res.json({
        resp, message: "User removed"
    });
}





//Export
module.exports = UserControllers;