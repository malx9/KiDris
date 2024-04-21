const express = require("express");
const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "0.0.0.0",
  password: "password",
  database: "loginsystem",
});

const login = express.Router();

login.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE BINARY username = ? AND BINARY password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ success: false, message: "Database error" });
      }

      if (result.length > 0) {
        res.send({ success: true, user: result[0] });
      } else {
        res.send({ success: false, message: "Wrong username/password" });
      }
    }
  );
});

module.exports = {
  login,
};
