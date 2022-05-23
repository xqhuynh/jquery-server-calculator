// Import express
const express = require("express");

// Import body-parser
const bodyParser = require("body-parser");

// Create express app
const app = express();

// Use body parser in express app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Share client side w/public folder
app.use(express.static("server/public"));

// Listen for internet requests
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});

// GET math endpoint
app.get("/math", (req, res) => {
  // Code runs when user goes to localhost:5000/inventory
  console.log("In GET /math");
  // Send math back to client
  res.send(math);
});

// POST math endpoint
app.post("/math", (req, res) => {
  // req.body is the data sent from the client
  console.log("in POST /math");
  // Send status code 201 if successful
  res.sendStatus(201);
});
