const express = require('express');
const router = express.Router();
const autenticacaoController = require('../controllers/autenticacaoController');

router.post('/login', autenticacaoController.login);
router.get('/sair', autenticacaoController.sair);

module.exports = router;