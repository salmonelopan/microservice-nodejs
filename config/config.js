const dotenv = require("dotenv");
const path = require("path");

if(!process.env.MYSQL_HOST){
  dotenv.config({
    path: path.join(__dirname, "..", ".env")
  })
}

module.exports = {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    operatorsAliases: false
  }

// module.exports = {
//   development: {
//     username: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASS,
//     database: process.env.MYSQL_DB,
//     host: process.env.MYSQL_HOST,
//     dialect: "mysql",
//     operatorsAliases: false
//   },
//   test: {
//     username: "root",
//     password: null,
//     database: "database_test",
//     host: "127.0.0.1",
//     dialect: "mysql",
//     operatorsAliases: false
//   },
//   production: {
//     username: "root",
//     password: null,
//     database: "database_production",
//     host: "127.0.0.1",
//     dialect: "mysql",
//     operatorsAliases: false
//   }
// }
