const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const { User } = require('../models/index'); //incluyo user model


module.exports = (req, res, next) => {


//IF TOKEN EXISTS
if(!req.headers.authorization) {
    res.status(401).json({ msg: "Acceso denied" });
} else {

// Check the validation of this token
    let token = req.headers.authorization.split(" ")[1];

//TOKEN VALIDATION
    jwt.verify(token, authConfig.secret, (err, decoded) => {

    if(err) {
        res.status(500).json({ msg: "Token error", err });
    } else {          
    User.findByPk(decoded.user.id, { include: "roles" }).then(User => {
    //console.log(user.roles);
        req.user = User;
            next();
        });
    }

    })
}

};