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

// Set up empty array of objects to store calculations
let calculations = [
  {
    number1: 2,
    operator: "+",
    number2: 4,
  },
];

// GET math endpoint
app.get("/math", (req, res) => {
  // Code runs when user goes to localhost:5000/inventory
  console.log("In GET /math");
  // Send math back to client
  res.send(calculations);
});

// POST math endpoint
app.post("/math", (req, res) => {
  // req.body is the data sent from the client
  let number1 = req.body.number1;
  let number2 = req.body.number2;
  let operator = req.body.operator;
  let answer = calcInput(number1, number2, operator);
  console.log("in POST /math");
  // Add new equation to calculations array object
  calculations.push(number1, operator, number2, answer);
  res.sendStatus(201);
});

// Function to calculate inputs
function calcInput(number1, number2, operator) {
  if (operator === "+") {
    return number1 + number2;
  }
  if (operator === "-") {
    return number1 - number2;
  }
  if (operator === "*") {
    return number1 * number2;
  }
  if (operator === "/") {
    return number1 / number2;
  }
}
