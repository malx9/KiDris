const express = require("express");
const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "0.0.0.0",
  password: "password",
  database: "loginsystem",
});

const getUserData = (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Database Error whilst fetching data for the users table",
      });
    }
    return res.status(200).json({ success: true, users: result });
  });
};

module.exports = {
  getUserData,
};
