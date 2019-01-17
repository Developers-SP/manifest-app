const urlController = require('../controllers/plane.controller')
  , express = require('express')
  , router = express.Router();

router.post('/find-by-prefix', urlController.findByPrefix);
router.get('/find-all', urlController.findAll);
router.post('/insert', urlController.insert);
router.put('/update', urlController.update);

module.exports = router;
