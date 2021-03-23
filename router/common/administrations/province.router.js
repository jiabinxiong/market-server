const router = require('express').Router();

const province = require('../../../controllers/common/administrations/province.controller');

router.get('/province', province.provinceController);

module.exports = router;