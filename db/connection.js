// Import mysql2 package
const mysql = require("mysql2");

// Connect application to the MySQL database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username (default is root)
    user: "root",
    // MySQL password (default is no password)
    password: "",
    database: "election",
  },
  console.log("Connected to the election database.")
);

// Export module to server.js
module.exports = db;
