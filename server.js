// Import express
const express = require("express");
const { reset } = require("yargs");

// Port designation & app expression
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request- user requests that aren't supported by the app- (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Function to start the Express.js server on port 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
