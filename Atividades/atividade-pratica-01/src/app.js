const express = require("express");
const cors = require("cors");

const app = express();

const index = require("./routes/index");
const pessoaRoutes = require("./routes/pessoa.routes");
const tipoSanguineoRoutes = require("./routes/tipoSanguineo.routes");
const doacaoRoutes = require("./routes/doacao.routes");
const localColeta = require("./routes/localColeta.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(index);
app.use("/pessoas/", pessoaRoutes);
app.use("/tiposSanguineo/", tipoSanguineoRoutes);
app.use("/doacoes/", doacaoRoutes);
app.use("/locaisColeta/", localColeta);

module.exports = app;
