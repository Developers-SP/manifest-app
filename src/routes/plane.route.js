const urlController = require('../controllers/plane.controller')
  , express = require('express')
  , router = express.Router();

router.get('/find-by-prefix/:prefix', urlController.findByPrefix);
router.get('/find-all', urlController.findAll);
router.post('/insert', urlController.insert);
router.put('/update', urlController.update);
router.delete('/delete', urlController.delete);

module.exports = router;
