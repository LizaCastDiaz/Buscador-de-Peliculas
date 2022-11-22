const { User } = require('../models/index');

const {
  assertValidPasswordService,
  assertEmailIsUniqueService,
  assertEmailIsValid,
  createUserService,
  encryptPassword,
} = require("../services/authServices")

const jsonwebtoken = require("jsonwebtoken");

async function authRegisterController(req, res) {
  const body = req.body;


  // VALIDATE PASSWORD
  try {
    assertValidPasswordService(body.password);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Invalid password: " + error.message });
    return;
  }

  //-------------------------------------------------------------------------------------

  // VALIDATE IF EMAIL IS INVALID
  try {
    assertEmailIsValid(body.email);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Email is invalid: " + error.message });
    return;
  }

  //-------------------------------------------------------------------------------------

  // VALIDATE A UNIQUE EMAIL
  try {
    await assertEmailIsUniqueService(body.email);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "Email is already registered: " + error.message,
    });
    return;
  }

  //-------------------------------------------------------------------------------------
  // SAVE USER
  try {
    const userCreated = await createUserService(body);
    delete userCreated.password;
    console.log("soy body", body)
    //   delete userCreated._id;
    res.status(201).json(userCreated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}


//-------------------------------------------------------------------------------------
// VALIDATE IF PASSWORD OR EMAIL IS INCONRRECT

async function authLoginController(req, res) {


  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ where: { email: email } });
    if (!userFound) {
      res.status(401).json({ message: "Password or email is incorrect" });
      return;
    }
    const hashedPassword = encryptPassword(password);
    if (hashedPassword !== userFound.password) {
      res.status(401).json({ message: "Password or email is incorrect" });
      return;
    }

    const secret = process.env.JWT_SECRET || '';

    if (secret.length < 10) {
      throw new Error("JWT_SECRET is not set");
    }

    const jwt = jsonwebtoken.sign({
      //   uuid: userFound.uuid,
      email: userFound.email,
      created: Date.now(),
      role: userFound.RoleIdRole,
    }, secret);
    console.log("soy js")

    res.status(200).json({
      message: "Login successful",
      jwt: jwt,
      role: userFound.RoleIdRole,
    });
  } catch (error) {
    console.error(error);

  }
}

module.exports = {
  authLoginController,
  authRegisterController,
};