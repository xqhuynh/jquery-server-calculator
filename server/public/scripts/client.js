$(document).ready(onReady);

function onReady() {
  $(".submitBtn").on("click", onSubmit);
  $(".operator").on("click", grabOperator);
}

let operator;
// turn operator into math operator
function grabOperator() {
  operator = $(this).val();
}

function onSubmit() {
  let num1 = $(".num1").val();
  let num2 = $(".num2").val();
  let equation = { num1, operator, num2 };
}
