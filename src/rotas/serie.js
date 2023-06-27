var express = require('express');
var serieController = require('../controller/serieController')
var router = express.Router();

router.get('/', serieController.listSeries)
router.get('/:id', serieController.getSerie)
router.post('/new', serieController.newSerie)
router.post('/edit', serieController.editSerie)
router.post('/delete', serieController.deleteSerie)

module.exports = router