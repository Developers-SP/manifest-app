const controller = require('../controllers/takeoff.controller')
  , express = require('express')
  , router = express.Router();

router.delete('/:id', controller.delete);
router.get('/:id', controller.findById);
router.put('/:id', controller.update);

router.post('/', controller.insert);
router.get('/', controller.findAll);

module.exports = router;
