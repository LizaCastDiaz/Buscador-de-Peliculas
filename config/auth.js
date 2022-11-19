const dotenv = require('dotenv').config();

module.exports = {
    secret: process.env.JWT_SECRET || "thechimpparadox",
    expires: process.env.AUTH_EXPIRES ,
    rounds: process.env.AUTH_ROUNDS || 10
}