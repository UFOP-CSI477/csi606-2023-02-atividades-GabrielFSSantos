const express = require("express");
const cors = require("cors");

const app = express();

const index = require("./routes/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(index);

module.exports = app;
