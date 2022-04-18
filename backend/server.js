const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();

dotenv.config();
connectDB();
app.get("/api/notes", (req, res) => {
  res.json("All notes");
});

app.get("/api/notes/:id", (req, res) => {
  res.json("Specific porduct /:id");
});
app.listen(
  process.env.PORT || 2000,
  console.log(`Server Started at ${process.env.PORT}`)
);
