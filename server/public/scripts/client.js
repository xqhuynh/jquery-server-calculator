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
  // Call getHistory function when page loads
  getHistory();
}

// Add button function after equals is clicked
function submitInputs() {
  // Create new array object to store user inputs
  const newInput = {
    num1: $("numberInput1").val(),
    num2: $("numberInput2").val(),
    operator: operator,
    total: "",
  };
  // Post function call
  postInput(newInput);
}

// Clear button function after C is clicked
function clearInputs() {
  $("numberInput1").val("");
  $("numberInput2").val("");
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

function getHistory() {}
