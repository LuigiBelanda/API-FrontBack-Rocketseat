// npm i axios
// npm i cors
// npm i nodemon
// npm i express

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "okay" });
});

app.listen("3000");
