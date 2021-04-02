const marketManagementRouter = require('./market/management/market.router');
const pcasCodeRouter = require('./common/administrations/pcasCode.router');
const uploadRouter = require('./file/file.router');

module.exports = {
    marketManagementRouter,
    pcasCodeRouter,
    uploadRouter
};