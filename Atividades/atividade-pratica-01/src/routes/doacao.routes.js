const express = require('express');
const router = express.Router();
const doacaoController = require('../controllers/doacao.controller');

router.post('/create', doacaoController.create);
router.get('/read', doacaoController.read);
router.put('/update', doacaoController.update);
router.delete('/delete', doacaoController.delet);

module.exports = router;