const urlController = require('../controllers/manifest.controller')
  , express = require('express')
  , router = express.Router();

router.post('/find-by-id', urlController.findById);
router.get('/find-all', urlController.findAll);
router.post('/insert', urlController.insert);
router.put('/update', urlController.update);

module.exports = router;
