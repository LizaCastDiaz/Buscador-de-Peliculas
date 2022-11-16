// //Importo modelo de datos
const models = require('../models/index');
const { Op } = require('sequelize'); // Import  all ORM sequelize functions
const router = require('express').Router();
const UserControllers = {}; //Create the object controller


//CRUD end-points Functions
//GET all
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
// UserControllers.signIn = (req, res) => {
//     let email = req.body.email;
//     let password = req.body.password;
  
//     User.findOne({
//       where: { email: email },
//     })
//       .then((User) => {
//         if (!User) {
//           res.status(404).json({ msg: "Not found" });
//         } else {
//           if (bcrypt.compareSync(password, User.password)) {
//             let token = jwt.sign({ User: User }, authConfig.secret, {
//               expiresIn: authConfig.expires,
//             });
//             res.json({
//               User: User,
//               token: token,
//             });
//           } else {
//             res.status(401).json({ msg: "Email, User or Password incorrects" });
//           }
//         }
//       })
//       .catch((err) => {
//         res.status(500).json(err);
//       });
//   };

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