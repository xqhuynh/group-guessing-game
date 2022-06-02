$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!");
  console.log(randomNumber);
  $(".submitBtn").on("click", submitBtnHandler);
}

function submitBtnHandler() {
  let num1 = $(".numberInput1").val();
  let num2 = $(".numberInput2").val();
  let numberObject = {
    num1: num1,
    num2: num2,
  };

  // Ajax POST call
  $.ajax({
    method: "POST",
    url: "/game",
    data: numberObject,
  })
    .then((response) => {
      console.log("in submitBtnHandler", response);
      // Refresh data after submit button clicked
      getNumbers();
      // Clear inputs after submit
      $(".numberInput1").val("");
      $(".numberInput2").val("");
    })
    .catch((err) => {
      console.log("POST function failed", err);
    });
}

function getNumbers() {}
