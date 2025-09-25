const express = require("express");
const employees = require("./employees.json");
const rooms = require("./rooms");
require("dotenv").config();
const Port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get("/api/simaccess", (req, res) => {
  res.json({ message: "Backend running!" });
});

app.listen(Port, () => console.log(`Backend running on port ${Port}`));
