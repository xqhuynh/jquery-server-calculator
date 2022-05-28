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

// Empty array to store inputs
let inputs = [];

// GET /calculate request to get back data from the serve on /calculate route
app.get("/calculate", (req, res) => {
  console.log("In GET /calculate");
  res.send(inputs);
});

// POST request to add date to server on /calculate route
app.post("/calculate", (req, res) => {
  // req.body is data submitted in request body, populared with bodyParser
  let newInput = req.body;
  let operator = newInput.operator;
  // parseFloat to convert to string and return floating point number
  let num1 = parseFloat(newInput.num1);
  let num2 = parseFloat(newInput.num2);

  // Switch statement for math calculations
  switch (operator) {
    case "+":
      newInput.total = num1 + num2;
      break;
    case "-":
      newInput.total = num1 - num2;
      break;
    case "*":
      newInput.total = num1 * num2;
      break;
    case "/":
      newInput.total = num1 / num2;
    default:
      0;
  }
  // Push new inputs into empty inputs array
  inputs.push(newInput);
  res.sendStatus(200);
});
