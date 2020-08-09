// import { createConnection } from "mysql";
var mysql = require("mysql");
var env = require("dotenv").config();
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });
}

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
});
