$(document).ready(onReady);

function onReady() {
  $(".submitBtn").on("click", onSubmit);
  $(".operator").on("click", grabOperator);
  getEquation();
}

let operator;
// turn operator into math operator
function grabOperator() {
  operator = $(this).val();
}

function onSubmit() {
  let equation = {
    number1: $(".num1").val(),
    operator: $(".operator").val(),
    number2: $(".num2").val(),
  };

  // Ajax POST
  $.ajax({
    url: "/math",
    method: "POST",
    data: equation,
  })
    .then(() => {
      console.log("POST /math success");
    })
    .catch((err) => {
      console.log("oh no", err);
    });
  // empty inputs
}
// GET fresh data vis GET request
function getEquation() {
  $.ajax({
    url: "/math",
    method: "GET",
  })
    .then((response) => {
      console.log("GET request successful", response);
      renderMath();
    })
    .catch((err) => {
      // Display error message on body
      $("body").html(`
      <h1>
        We apologize for the error. Please try later. 
      </h1>
    `);
    });
}

// Use Ajax to get math history and append to DOM
function renderMath(calculations) {
  $(".historyResult").empty();
  for (let calculation of calculations) {
    $(".historyResult").append(`
      <li>
        ${calculation.number1}
        ${calculation.operator}
        ${calculation.number2}
      </li>
  `);
  }
}
