const router = require('express').Router();

const { managementMarket } = require('../../../controllers');


router.post('/newMarket', managementMarket.newMarket);
router.get('/queryMarket', managementMarket.queryMarket);
router.post('/deleteMarket', managementMarket.deleteMarket);
router.post('/updateMarket', managementMarket.updateMarket);
router.get('/searchMarket', managementMarket.searchMarket);

module.exports = router;