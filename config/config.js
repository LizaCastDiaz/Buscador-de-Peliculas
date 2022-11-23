const dotenv = require('dotenv').config();

module.exports = {

  environment: process.env.NODE_ENV || 'development',
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || "ZHfJ5W8k9iT6t6m2QrnL",//'root',
  database: process.env.MYSQL_DATABASE || "railway" ,//'Blockbuster',
  host: process.env.MYSQL_HOST || "containers-us-west-60.railway.app",//'127.0.0.1',
  port: process.env.MYSQL_PORT || 7047,//3306,
  dialect: process.env.DIALECT || 'mysql'

}
