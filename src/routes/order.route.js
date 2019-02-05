const urlController = require('../controllers/order.controller')
  , express = require('express')
  , router = express.Router();

router.delete('/:id', urlController.delete);
router.get('/:id', urlController.findById);
router.put('/:id', urlController.update);

router.get('/', urlController.findAll);
router.post('/', urlController.insert);

module.exports = router;
