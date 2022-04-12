// Import mysql2 package
const mysql = require("mysql2");

// Import express
const express = require("express");

// Port designation & app expression
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

// Return all data in the candidates table
db.query("SELECT * FROM candidates", (err, rows) => {
  console.log(rows);
});

// Default response for any other request- user requests that aren't supported by the app- (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Function to start the Express.js server on port 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
