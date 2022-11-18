const models = require("../models/index");
const crypto = require("node:crypto");
const { REPL_MODE_SLOPPY } = require("node:repl");

// Comprobar si el email está registrado.

async function assertEmailIsUniqueService(email) {
  // validate email is unique
  const user = await models.user.findOne({
    where:{ email: email }});
  if (user) {
    throw new Error("Email is already registered");
  }
}


//Verificar token

function verifyToken(req,res,next){
const bearerHeader= req.headers['authorization'];
if(typeof bearerHeader!=="undefined"){
   const token= bearerHeader.split(" ")[1];
   req.token=token;
   next();
}else{
    res.sendStatus(403);
}
}

async function isValidUserAndPassword(user, pass) {
    const userFound = await models.user.findOne({ email: user });
    if (userFound) {
      const hash = encryptPassword(pass);
      return hash === userFound.password;
    }
    return false;
  }

module.exports = {
  assertEmailIsUniqueService,
  verifyToken,
  isValidUserAndPassword
};
