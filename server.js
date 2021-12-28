// npm i axios
// npm i cors
// npm i nodemon
// npm i express

const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  return res.json([{ name: "jeff" }, { name: "diego" }]);
});

app.listen("4567");
