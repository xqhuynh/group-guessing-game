const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static("server/public"));

const randomNumber = Math.floor(Math.random() * (25 - 1 + 1) + 1);

// GET & POST Routes go here
app.post("/game", (req, res) => {
  let newNumbers = req.body;
  console.log("New numbers added", newNumbers);
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
