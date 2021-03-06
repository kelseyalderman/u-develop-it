// Import express
const express = require("express");

// Import module from connection.js
const db = require("./db/connection");

// Import API routes
const apiRoutes = require("./routes/apiRoutes");

// Port designation & app expression
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// By including the /api prefix here, we do not have to include it in the individual route expressions
app.use("/api", apiRoutes);

// Default response for any other request- user requests that aren't supported by the app- (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Function to start the Express.js server on port 3001
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
