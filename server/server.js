const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static("server/public"));

const randomNumber = Math.floor(Math.random() * (25 - 1 + 1) + 1);
const firstPersonGuess = [];

// GET & POST Routes go here
// POST route
app.post("/game", (req, res) => {
  let num1 = req.body.num1;
  console.log("Random number is: ", randomNumber);

  if (randomNumber != num1) {
    firstPersonGuess.push(num1);
  }
});

// GET route
app.get("/game", (req, res) => {
  res.send(firstPersonGuess);
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
