const express = require("express");
const cors = require("cors");

const app = express();

const index = require("./routes/index");
const pessoaRoutes = require("./routes/pessoa.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(index);
app.use("/pessoa/", pessoaRoutes);

module.exports = app;
