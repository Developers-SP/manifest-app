const urlController = require('../controllers/user.controller')
  , express = require('express')
  , router = express.Router();

router.post('/login', urlController.login);
router.get('/find-all', urlController.findAll);
router.post('/insert', urlController.insert);
router.put('/update', urlController.update);

module.exports = router;
