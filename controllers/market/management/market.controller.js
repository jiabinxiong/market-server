const { NewMarketManagement } = require('../../../modules');
const { newMarketConstant } = require('../../../constants');

exports.newMarket = async (req, res) => {
    try {
    
        await new NewMarketManagement({
            ...newMarketConstant,
            ...req.body
        }).save((err, docs) => {
            if(err) {
                return res.status(400).send({
                    code: 1,
                    msg: err._message,
                });
            } else {
                return res.status(200).send({
                    code: 0,
                    msg: 'ok',
                    _id: docs._id
                });
            }
        });
        

        
    } catch(err) {
        return res.status(500).send({
            code: 1000,
            msg: 'server error'
        });
    }
}

exports.queryMarket = async(req, res) => {
    const size = req.query.size || 10;
    const page = req.query.page || 1;

    try{
        const count = await NewMarketManagement.estimatedDocumentCount();
        await NewMarketManagement.find().sort({_id: -1}).limit(Number(size)).skip(Number((page-1)*size))
            .then(data => {
                return res.status(200).send({
                    code: 0,
                    msg: 'ok',
                    count: count,
                    list: data,
                    size: parseInt(size),
                    page: parseInt(page)
                });
        }).catch(() => {
            return res.status(200).send({
                code: -1,
                msg: '查询失败'
            });
        });

    } catch(err) {
        return res.status(500).send({
            code: 1000,
            msg: 'server error'
        });
    }
}

exports.searchMarket = async(req, res) => {
    const name = req.query.name || '';
    const size = req.query.size || 2;
    const page = req.query.page || 1;

    try{
        await NewMarketManagement.find({
            name: 'xiong'
        }).sort({_id: -1}).limit(Number(size)).skip(Number((page-1)*size)).then(data => {
            return res.status(200).send({
                code: 0,
                msg: 'ok',
                count: data.length,
                list: data,
                size: parseInt(size),
                page: parseInt(page)
            });
        }).catch(() => {
            return res.status(200).send({
                code: -1,
                msg: '查询失败'
            });
        });

    } catch(err) {
        return res.status(500).send({
            code: 1000,
            msg: 'server error'
        });
    }
}

exports.deleteMarket = async(req, res) => {
    // NewMarketManagement.remove({}, () => {}); // 根据条件删除所有
    // NewMarketManagement.findOneAndRemove(conditions, [optios], [callback])
    // NewMarketManagement.findByIdAndRemove(id, [optiosn], [callback])
    console.log(req.body);
    try{
        await NewMarketManagement.findByIdAndRemove(req.body.id, (err) => {
            if(err) {
                return res.status(500).send({
                    code: 1,
                    msg: '删除失败'
                })
            } else {
                return res.status(200).send({
                    code: 0,
                    msg: '成功'
                })
            }
            
        })
        // await NewMarketManagement.remove({
        //     _id: req.body.id
        // }).then(data => {
        //     return res.status(200).send({
        //         code: 0,
        //         msg: 'ok',
        //         data: data
        //     })
        // }).catch((err) => {
        //     return res.status(200).send({
        //         code: -1,
        //         msg: '删除失败'
        //     });
        // })
    } catch(err) {
        return res.status(500).send({
            code: 1000,
            msg: 'server error'
        });
    }
}

exports.updateMarket = (req, res) => {
    // console.log(req.body);
    const {_id, ...deleteBody} = req.body;

    try{
        NewMarketManagement.findByIdAndUpdate(_id, deleteBody).then(data => {
            return res.status(200).send({
                code: 0,
                msg: 'ok',
                data: data
            })
        })
    } catch(err) {
        return res.status(500).send({
            code: 1000,
            msg: 'server error'
        });
    }
}