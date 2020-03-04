var mysql = require("mysql");
// const Promise = require("bluebird");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "Glist"
});

db.connect(function(err) {
  if (err) console.log(err);
  console.log("Connected!");
  // db.query("SHOW TABLES;", (err, result) => {
  //   if (err) console.log(err);
  //   console.log(result);
  // });
});

// const db = Promise.promisifyAll(connection, { multiArgs: true });

module.exports = db;
// insert into
