import { createConnection } from "mysql";
var mysql = require("mysql");
require("dotenv").config();
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection(process.env.PRODUCTION);
}
//       {
//     host: "localhost",
//     port: 8080,
//     user: "root",
//     password: "password",
//     database: "burger_db",
//   }

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
});
