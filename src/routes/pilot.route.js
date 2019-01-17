const urlController = require('../controllers/pilot.controller')
  , express = require('express')
  , router = express.Router();

router.post('/find-by-registry', urlController.findByRegistry);
router.get('/find-all', urlController.findAll);
router.post('/insert', urlController.insert);
router.put('/update', urlController.update);

module.exports = router;
