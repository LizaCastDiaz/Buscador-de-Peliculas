const dotenv = require('dotenv').config();

module.exports = {

  environment: process.env.NODE_ENV || 'development',
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || "ZHfJ5W8k9iT6t6m2QrnL",
  database: process.env.DB_DATABASE || "railway",
  host: process.env.DB_HOST || "containers-us-west-60.railway.app",
  port: process.env.DB_PORT || 7047,
  dialect: process.env.DB_DIALECT || 'mysql'

}
