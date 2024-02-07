const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({
    message: 'Bem-Vindo(a) a API - Sistema de Doação de Sangue',
  });
});

module.exports = router;