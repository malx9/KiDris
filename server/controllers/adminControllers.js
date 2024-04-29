const express = require("express");
const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "0.0.0.0",
  password: "password",
  database: "loginsystem",
});

// send data to populate the users table
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

const addUser = (req, res) => {
  const { username, password, role, admin } = req.body;

  if (!username || !password || !role) {
    return res.status(500).json({
      success: false,
      message: "Username, password or role missing",
    });
  }

  db.query(
    "INSERT INTO users (username, password, role, admin) VALUES (?, ?, ?, ?)",
    [username, password, role, admin],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Failed to add user to database",
        });
      }
      if (result && result.insertId) {
        return res.status(200).json({
          success: true,
          message: "User added successfully",
          userID: result.insertId,
        });
      } else {
        return res.status(500).json({
          success: false,
          message: "Failed to retrieve user ID",
        });
      }
    }
  );
};

const deleteUser = (req, res) => {
  const userId = req.params.id;

  db.query("DELETE FROM users WHERE user_id = ?", [userId], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Failed to delete user",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  });
};

const editUser = (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;

  db.query(
    "UPDATE users SET username = ?, role = ? WHERE user_id = ?",
    [updatedUserData.username, updatedUserData.role, userId],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Failed to update user",
          error: err,
        });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "User updated successfully",
      });
    }
  );
};

module.exports = {
  getUserData,
  addUser,
  deleteUser,
  editUser,
};
