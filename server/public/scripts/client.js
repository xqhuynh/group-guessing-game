$(document).ready(handleReady);

function handleReady() {
  getNumbers();
  console.log("jquery is loaded!");
  $(".submitBtn").on("click", submitBtnHandler);
}

function submitBtnHandler() {
  let num1 = $(".numberInput1").val();

  let objectToSend = {
    num1: num1,
  };
  // Clear inputs after submit
  $(".clearInput").val("");
  // Ajax POST call
  $.ajax({
    method: "POST",
    url: "/game",
    data: objectToSend,
  })
    .then((response) => {
      console.log("in submitBtnHandler", response);
      // Refresh data after submit button clicked
      getNumbers(response);
    })
    .catch((err) => {
      console.log("POST function failed", err);
    });
}

function getNumbers(response) {
  $("#guessOutput").empty();
  $.ajax({
    method: "GET",
    url: "/game",
  }).then((response) => {
    console.log(response);
    $("#guessOutput").append(`
        <ul>
          <li>Guesses are: ${response}</li>
        </ul>
    `);
  });
}
