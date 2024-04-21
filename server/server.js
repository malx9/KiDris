const express = require("express");
const cors = require("cors");
const loginRoutes = require("./routes/loginRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(loginRoutes);
app.use(adminRoutes);

app.listen(3001, () => {
  console.log("server running");
});
