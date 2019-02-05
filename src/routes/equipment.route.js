const controller = require('../controllers/equipment.controller')
  , express = require('express')
  , router = express.Router();

router.delete('/:id', controller.delete);
router.get('/:id', controller.findById);
router.put('/:id', controller.update);

router.get('/', controller.findAll);
router.post('/', controller.insert);

module.exports = router;
