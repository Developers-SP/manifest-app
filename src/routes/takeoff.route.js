const urlController = require('../controllers/takeoff.controller')
  , express = require('express')
  , router = express.Router();

router.get('/find-by-id/:id', urlController.findById);
router.get('/find-all', urlController.findAll);
router.post('/insert', urlController.insert);
router.put('/update', urlController.update);
router.delete('/delete', urlController.delete);

module.exports = router;
