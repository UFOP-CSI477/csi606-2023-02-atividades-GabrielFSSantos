const express = require('express');
const router = express.Router();
const tipoSanguineoController = require('../controllers/tipoSanguineo.controller');

router.post('/create', tipoSanguineoController.create);
router.get('/read', tipoSanguineoController.read);
router.put('/update', tipoSanguineoController.update);
router.delete('/delete', tipoSanguineoController.delet);

module.exports = router;