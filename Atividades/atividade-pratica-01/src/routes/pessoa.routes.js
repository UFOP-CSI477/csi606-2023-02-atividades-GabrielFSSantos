const express = require('express');
const router = express.Router();
const userController = require('../controllers/pessoa.controller');

router.post('/create', userController.create);
router.get('/read', userController.read);
router.put('/update', userController.update);
router.delete('/delete', userController.delet);

module.exports = router;