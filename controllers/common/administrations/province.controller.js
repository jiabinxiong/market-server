const provinceObj = require('../../../static/common/administration/province');

exports.provinceController = (req, res) => {
    return res.status(200).send({
        code: 0,
        msg: 'ok',
        data: provinceObj
    })
}