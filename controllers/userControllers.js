// //Importo modelo de datos
const router = require("express").Router();
const {User}= require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const UserControllers = {}; //Create the object controller

//CRUD END-POINTS FUNCTIONS 

//------------------ .. ------------------

//GET ALL USERS
UserControllers.getAll = async (req, res) => {

    User.findAll().then(data => {
        res.send(data);
    })
        .catch(err => {res.status(500).send({
        message: err.message || " error ."});
    });
};


//-------------------------------------------------------------------------------------

//GET USER BY ID

UserControllers.getById = async (req, res) => {
    try {
        let id = req.params.id;

        let resp = await User.findOne({
        where: {
        id_user: id
        },
    });
        res.send(resp);
    } catch (error) {
        res.send(error);
    }
};



//-------------------------------------------------------------------------------------
//USER SIGNUP

// UserControllers.signUp = async (req, res) => {
//     password = bcrypt.hashSync(
//       req.body.password,
//       Number.parseInt(authConfig.rounds)
//     );
//     const hash = crypto
//     const userCreated = await User.create({
//       name: req.body.name,
//       email: req.body.email,
//       password: password,
//       role: req.body.rol,
//     }).catch((err) => {
//       res.status(500).json(err);
//     });
//     res.json(userCreated);
//   };


//-------------------------------------------------------------------------------------
  //USER SIGN IN
//   UserControllers.signIn = (req, res) => {
//     let email = req.body.email;
//     let password = req.body.password;

//     User.findOne({
//     where: { email: email },
//     })
//     .then((User) => {
//         if (!User) {
//         res.status(404).json({ message: "Not found" });
//         } else {
//         if (bcrypt.compareSync(password, User.password)) {
//             let token = jwt.sign({ User: User }, authConfig.secret, {
//             expiresIn: authConfig.expires,
//             });
//             res.json({
//             User: User,
//             token: token,
//             });
//         } else {
//             res
//             .status(401)
//             .json({ message: "Email, User or Password incorrects" });
//         }
//         }
//     })
//     .catch((err) => {
//         res.status(500).json(err);
//     });
// };



//-------------------------------------------------------------------------------------
 
// UPDATE USER
UserControllers.updateUser= async (req, res) => {
    try {
        let data = req.body
        let resp = await User.update(
            {
                email: data.email,
                password: data.password,
                name: data.name
            },
            {
                where: { email: data.email }
            }
        )

        res.send(resp)

    } catch (err) {
        res.send(err)
    }} 

  //-------------------------------------------------------------------------------------

  // DELETE USER (can only be done by the admin)
UserControllers.deleteUser = async (req, res) => {
    try {
        let email = req.params.email
        let resp = await User.destroy({
            where: { email: email }
        })

        if (resp == 1) {
            res.send("Se ha eliminado el perfil correctamente")
        } else {
            res.send("No se ha podido eliminar el registro")
        }

    } catch (err) {
        res.send(err)
    }

 
  };
  
//Export
module.exports = UserControllers;

