const express = require("express");
const app = express();
const cors = require("cors");

const mysql = require("mysql");

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "0.0.0.0",
  password: "password",
  database: "loginsystem",
});

app.post("/login", (req, res) => {
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

app.listen(3001, () => {
  console.log("server running");
});
