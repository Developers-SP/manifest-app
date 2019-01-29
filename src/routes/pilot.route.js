const urlController = require('../controllers/pilot.controller')
  , express = require('express')
  , router = express.Router();

router.get('/find-by-registry/:registry', urlController.findByRegistry);
router.get('/find-all', urlController.findAll);
router.post('/insert', urlController.insert);
router.put('/update', urlController.update);
router.delete('/delete', urlController.delete);

module.exports = router;
