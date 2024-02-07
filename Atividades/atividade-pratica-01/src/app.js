const express = require("express");
const cors = require("cors");

const app = express();

const index = require("./routes/index");
const tipoSanguineoRoutes = require("./routes/tipoSanguineo.routes");
const doacaoRoutes = require("./routes/doacao.routes");
const localColeta = require("./routes/localColeta.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(index);
app.use("/pessoa/", pessoaRoutes);
app.use("/tipoSanguineo/", tipoSanguineoRoutes);
app.use("/doacao/", doacaoRoutes);
app.use("/localColeta/", localColeta);

module.exports = app;
