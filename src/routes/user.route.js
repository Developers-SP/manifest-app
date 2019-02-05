const controller = require('../controllers/user.controller')
  , express = require('express')
  , router = express.Router();

router.delete('/:id', controller.delete);
router.put('/:id', controller.update);

router.post('/', controller.insert);

router.post('/auth', controller.login);

module.exports = router;
