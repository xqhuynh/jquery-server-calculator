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

  // Ajax POST
  $.ajax({
    method: "POST",
    url: "/math",
    data: equation,
  })
    .then((response) => {
      console.log("POST /math success");
    })
    .catch((err) => {
      console.log("oh no", err);
    });
  console.log("POST response", response);
  // empty inputs
  // GET fresh data vis GET request
}
