const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');
const auntenticacaoController = require('../controllers/autenticacaoController');

router.get('/', auntenticacaoController.verificarLogin, formController.getIndexView);
router.post('/dados', formController.postDados);
router.get('/agendamentos', auntenticacaoController.verificarLogin, formController.getAgendamentosView);

module.exports = router;