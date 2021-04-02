const router = require('express').Router();

const { pcasCodeController } = require('../../../controllers');

router.get('/province', pcasCodeController.province);
router.get('/city', pcasCodeController.city);
router.get('/county', pcasCodeController.county);
// router.get('/street', pcasCodeController.street);

module.exports = router;