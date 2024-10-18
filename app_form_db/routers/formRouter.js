const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.get('/', formController.getIndexView);
router.post('/dados', formController.postDados);
router.get('/agendamentos', formController.getAgendamentosView);

module.exports = router;