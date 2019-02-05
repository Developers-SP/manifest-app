const controller = require('../controllers/payment.controller')
  , express = require('express')
  , router = express.Router();

router.delete('/:id', controller.delete);
router.put('/:id', controller.update);
router.get('/:id', controller.findById);

router.get('/', controller.findAll);
router.post('/', controller.insert);

module.exports = router;
