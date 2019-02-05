const controller = require('../controllers/pilot.controller')
  , express = require('express')
  , router = express.Router();

router.delete('/:registry', controller.delete);
router.get('/:registry', controller.findByRegistry);
router.put('/:registry', controller.update);

router.post('/', controller.insert);
router.get('/', controller.findAll);

module.exports = router;
