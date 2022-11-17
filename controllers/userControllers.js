// //Importo modelo de datos
const router = require("express").Router();
const { User } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');



const UserControllers = {}; //Create the object controller

//CRUD END-POINTS FUNCTIONS 

//------------------ .. ------------------

//GET ALL USERS
UserControllers.getAll = (req, res) => {

    if (req.User.User.rol == "admin") {//WE CHECK IF YOU ARE LOGGED IN AS ADMINISTRATOR

    User.findAll()
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
        message:
        err.message || "Something went wrong while trying to access users"
        });
    });
}else{
    res.send({
        message: `You do not have permissions to view all users. Contact an administrator.`
    });
    }
};


//-------------------------------------------------------------------------------------

//GET USER BY ID
UserControllers.getById = (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
    .then((data) => {
        if (data) {
        res.send(data);
        } else {
        res.status(404).send({
        message: `User not found`,
        });
        }
    })
    .catch((err) => {
        res.status(500).send({
        message: "Error",
        });
    });
};

//-------------------------------------------------------------------------------------
//USER SIGNUP

UserControllers.signUp = async (req, res) => {
    password = bcrypt.hashSync(
    req.body.password,
    Number.parseInt(authConfig.rounds)
);
    const userCreated = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    rol: req.body.rol,
}).catch((err) => {
    res.status(500).json(err);
});
    res.json(userCreated);
};


//-------------------------------------------------------------------------------------
  //USER LOG IN
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
UserControllers.updateUser = (req, res) => {
    const id = req.params.id;

    if (req.user.User.role == "admin" || req.User.User.id == id) {
    User.update(req.body, {
        where: { id_role: id },
    })
        .then((num) => {
        if (num == 1) {
            res.send({
            message: "User update",
            });
        } else {
            res.send({
            message: `Not updated ${id}`,
            });
        }
        })
        .catch((err) => {
        res.status(500).send({
            message: "User error",
        });
        });
    } else {
    res.send({
        message: `Access denied`,
    });
    }
  };
  

  //-------------------------------------------------------------------------------------

  // DELETE USER (can only be done by the admin)
UserControllers.deleteUser = (req, res) => {
    const id = req.params.id;

    if (req.User.User.role == "Admin" || req.User.User.id_role == id) {

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

