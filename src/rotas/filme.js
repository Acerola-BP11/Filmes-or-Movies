var express = require('express');
var filmeController = require('../controller/filmeController')
var router = express.Router();

router.get('/', filmeController.listFilmes)
router.get('/:id', filmeController.getFilme)
router.post('/new', filmeController.newFilme)
router.post('/edit', filmeController.editFilme)
router.post('/delete', filmeController.deleteFilme)

module.exports = router