// import { createConnection } from "mysql";
var mysql = require("mysql");
var env = require("dotenv").config();
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection(process.env.DB_HOST);
  console.log(password);
}

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
});

//       {
//     host: "localhost",
//     port: 8080,
//     user: "root",
//     password: "password",
//     database: "burger_db",
//   }

// mysql://wrr6kg9pac934do8:sba86w4lhjhyz02g@rnr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/w7uw6d5rchjoensn
