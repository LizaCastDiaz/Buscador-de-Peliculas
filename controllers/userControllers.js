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

UserControllers.signUp = async (req, res) => {
    password = bcrypt.hashSync(
      req.body.password,
      Number.parseInt(authConfig.rounds)
    );
    const hash = crypto
    const userCreated = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: password,
      role: req.body.rol,
    }).catch((err) => {
      res.status(500).json(err);
    });
    res.json(userCreated);
  };


//-------------------------------------------------------------------------------------
  //USER SIGN IN
  UserControllers.signIn = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({
    where: { email: email },
    })
    .then((User) => {
        if (!User) {
        res.status(404).json({ message: "Not found" });
        } else {
        if (bcrypt.compareSync(password, User.password)) {
            let token = jwt.sign({ User: User }, authConfig.secret, {
            expiresIn: authConfig.expires,
            });
            res.json({
            User: User,
            token: token,
            });
        } else {
            res
            .status(401)
            .json({ message: "Email, User or Password incorrects" });
        }
        }
    })
    .catch((err) => {
        res.status(500).json(err);
    });
};



//-------------------------------------------------------------------------------------

// UPDATE USER

UserControllers.updateUser= async (req, res) => {
    try {
        let data = req.body;
        let findUser = User.findOne({
            where: {
                email: req.auth.email
            }
        })
            
        
        console.log(findUser)      
    }catch (error) {
            res.send(error);
        
    }}  


    // try {

    //     let data = req.body;
    //     if (data.password) {   
    //         data.password = bcrypt.hashSync(data.password, Number.parseInt(authConfig.rounds || 10));
    //     }

    //     let user = await User.update(data, {
    //         where: { password: req.body.password}

    //     });
    //     res.send({
    //         token: generateToken(user),
    //         message: 'User updated successfully.'
    //     })

    // } catch (error) {
    //     res.send(error);
    // }
//};
// UserControllers.updateUser = (req, res) => {
//     const id = req.params.id;

//     if (req.user.User.rol == "admin" || req.user.User.id == id) {
//         User.update(req.body, {
//         where: { id: id },
//         })
//         .then((num) => {
//             if (num == 1) {
//             res.send({
//                 message: "User update",
//             });
//             } else {
//             res.send({
//                 message: `Not updated ${id}`,
//             });
//             }
//         })
//         .catch((err) => {
//             res.status(500).send({
//             message: "User error",
//             });
//         });
//     } else {
//         res.send({
//         message: `Access denied`,
//         });
//     }
//     };

  //-------------------------------------------------------------------------------------

  // DELETE USER (can only be done by the admin)
UserControllers.deleteUser = (req, res) => {
    const id = req.params.id;

    if (req.user.User.rol == "Admin" || req.user.User.id == id) {
    User.destroy<({
        where: { id: id_role},
        })
        .then((num) => {
        if (num == 1) {
            res.send({
            message: `User ${id} deleted with success`,
            });
        } else {
            res.send({
            message: `You cant delete this user ${id}`,
            });
        }
        })
        .catch((err) => {
        res.status(500).send({
            message: "Error"
        });
        });
    } else {
    res.send({
        message: `You dont have access to this field`,
    });
    }
  };
  
//Export
module.exports = UserControllers;

