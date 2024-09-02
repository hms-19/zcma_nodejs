const express = require('express');
const router = express.Router();
const controller = require('../../../controllers').userController;

// router.get('/',controller.index);
// router.post('/',controller.create);
router.route('/').get(controller.index).post(controller.create);
router.get('/:id',controller.show);
router.patch('/:id',controller.update);
router.delete('/:id',controller.destroy);

module.exports = router;