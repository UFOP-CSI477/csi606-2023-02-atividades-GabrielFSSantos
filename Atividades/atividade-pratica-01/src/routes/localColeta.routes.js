const express = require('express');
const router = express.Router();
const localColetaController = require('../controllers/localColeta.controller');

router.post('/create', localColetaController.create);
router.get('/read', localColetaController.read);
router.put('/update', localColetaController.update);
router.delete('/delete', localColetaController.delet);

module.exports = router;