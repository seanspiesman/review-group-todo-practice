// const client = require('../client')
const db = require("./db");
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const parser = require("body-parser");
const cors = require("cors");

var storage = {};

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, "../dist")));
// const placeData = listItem => {};

app.post("/stateInfo", (req, res) => {
  console.log(db);
  res.json("Got a POST request");
  db.query(`INSERT INTO items set item = '${req.body.val}';`);
});

// app.get("/cats", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
