$(document).ready(onReady);

// Set global variables
let operator;
let history;

function onReady() {
  console.log("in JS");
  // Equals button click event listener
  $(".equalsOperator").on("click", submitInputs);
  // Clear button click event listener
  $(".clearOperator").on("click", clearInputs);
  // Operator button click event listener
  $(".mathOperator").on("click", function (event) {
    operator = event.target.innerHTML;
  });
}

// Add button function after equals is clicked
function submitInputs() {
  // Create new array object to store user inputs
  const newInput = {
    num1: $(".numberInput1").val(),
    num2: $(".numberInput2").val(),
    operator: operator,
    total: "",
  };
  // Post function call
  postInput(newInput);
  // Call getHistory function when page loads
  getHistory();
}

// Clear button function after C is clicked
function clearInputs() {
  $(".numberInput1").val("");
  $(".numberInput2").val("");
}

// Ajax POST and GET
function postInput(inputData) {
  $.ajax({
    method: "POST",
    url: "/calculate",
    data: inputData,
  })
    .then((response) => {
      console.log("In POST /calculate client side", response);
      getHistory();
    })
    .catch((err) => {
      console.log("POST failed client side", err);
    });
}

function getHistory() {
  $.ajax({
    method: "GET",
    url: "/calculate",
  })
    .then((response) => {
      history = response;
      console.log("In GET /calculate client side", history);
      render();
    })
    .catch((err) => {
      console.log("GET failed client side", err);
    });
}

// Render to DOM
function render() {
  // Empty results
  $(".historyRecord").empty();
  // Loop through history and append to DOM
  for (let i = 0; i < history.length; i++) {
    let result = history[i];
    $(".historyRecord").append(`
      <li>
        ${result.num1} ${result.operator} ${result.num2} = ${result.total}
      </li>
    `);
  }

  const lastIndex = history[history.length - 1];
  if (lastIndex != undefined) {
    $(".expressionResult").empty();
    $(".expressionResult").append(`
      <h3>
        ${lastIndex.total}
      </h3>
    `);
  }
}
