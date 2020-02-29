// const client = require('../client')
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static("dist"));

app.post("/stateInfo", function(req, res) {
  console.log("post request recieved");
  res.send("Got a POST request");
});
// app.use(express.static(path.join(__dirname, "dist")));

app.get("/cats", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
