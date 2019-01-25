const urlController = require('../controllers/equipment.controller')
  , express = require('express')
  , router = express.Router();

router.get('/find-by-id/:id', urlController.findById);
router.get('/find-all', urlController.findAll);
router.post('/insert', urlController.insert);
router.put('/update', urlController.update);

module.exports = router;
