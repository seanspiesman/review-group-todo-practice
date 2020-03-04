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
  res.send("Got a POST request");
  db.query(`INSERT INTO items set item = '${req.body.val}';`);
});

app.delete("/stateInfo/:id", (req, res) => {
  console.log("Delete Req RCVD");
  // res.send("Delete Req RCVD");
  console.log(req.params.id);

  db.query(`DELETE FROM items where item = '${req.params.id}'; `);
  // db.query("SELECT * FROM items;", (err, result) => {
  //   console.log(result);
  // });
  res.end();
});

app.get("/stateInfo", (req, res) => {
  db.query("select item from items;", (err, result) => {
    // console.log(result);
    res.send(result);
  });
});
// app.get("/cats", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
