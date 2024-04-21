const express = require("express");
const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "0.0.0.0",
  password: "password",
  database: "loginsystem",
});

const getUserData = (req, res) => {
  const { username, role } = req.query;

  console.log("Received username:", username);
  console.log("Received role:", role);

  // check for user and role
  if (!username || !role) {
    return res.status(400).json({
      success: false,
      message: "Username or role not found in the database",
    });
  }

  db.query(
    "SELECT * FROM users WHERE BINARY username = ? AND BINARY role = ?",
    [username, role],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Database Error whilst fetching data for the users table",
        });
      }

      if (result.length > 0) {
        return res.status(200).json({ success: true, user: result[0] });
      } else {
        return res
          .status(200)
          .json({ success: false, message: "User not found" });
      }
    }
  );
};

module.exports = {
  getUserData,
};
