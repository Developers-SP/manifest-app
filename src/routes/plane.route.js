const controller = require('../controllers/plane.controller')
  , express = require('express')
  , router = express.Router();

router.delete('/:prefix', controller.delete);
router.get('/:prefix', controller.findByPrefix);
router.put('/:prefix', controller.update);

router.post('/', controller.insert);
router.get('/', controller.findAll);

module.exports = router;
