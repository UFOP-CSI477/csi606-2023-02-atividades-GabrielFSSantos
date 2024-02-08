const express = require('express');
const router = express.Router();
const pessoaController = require('../controllers/pessoa.controller');

router.post('/create', pessoaController.create);
router.get('/read', pessoaController.read);
router.put('/update', pessoaController.update);
router.delete('/delete', pessoaController.delet);
router.delete('/show', pessoaController.show);

module.exports = router;