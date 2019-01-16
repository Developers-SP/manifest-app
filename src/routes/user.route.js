const urlController = require('../controllers/user.controller')
  , express = require('express')
  , router = express.Router();

router.post('/login', urlController.login);
router.get('/find-all', urlController.findAll);
router.put('/insert', urlController.insert);


module.exports = router;
