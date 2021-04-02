const pcasCode = require('../../../static/common/administration/pcasCode');
const provinceJSON = require('../../../static/common/administration/province');
const cityJSON = require('../../../static/common/administration/city');
const countyJSON = require('../../../static/common/administration/county');

exports.province = (req, res) => {
    // let provinceArr = [];

    // for(let province of pcasCode[0]) {
    //     provinceArr.push({
    //         code: province.code,
    //         name: province.name
    //     });
    // }

    return res.status(200).send({
        code: 0,
        msg: 'ok',
        data: provinceJSON
    });
}

exports.city = (req, res) => {
    // let cityArr = [];

    // for(let i = 0; i < pcasCode[0].length; i++ ) {
    //     cityArr.push({
    //         provinceCode: pcasCode[0][i].code,
    //         children: []
    //     });
        
    //     for(let g = 0; g < pcasCode[0][i].children.length; g++) {
        
    //         cityArr[i].children.push({
    //             cityCode: pcasCode[0][i].children[g].code,
    //             name: pcasCode[0][i].children[g].name,
    //         })
    //     }
    
    // }

    return res.status(200).send({
        code: 0,
        msg: 'ok',
        data: cityJSON
    })
}

exports.county = (req, res) => {


    return res.status(200).send({
        code: 0,
        msg: 'ok',
        data: countyJSON
    })    
}

exports.street = (req, res) => {
    // let streetArr = [];
    // let cityArr = [];

    // for(let pcasCodeObj of pcasCode[0]) {
    //     streetArr.push({
    //         proviceCode: pcasCodeObj.code,
    //         name: pcasCodeObj.name,
    //         children: pcasCodeObj.children
    //     });
    //     for(let cityObj of pcasCodeObj.children ) {
    //         cityArr.push({
    //             cityObjCode: cityObj.code,
    //             name: cityObj.name,
    //         });
    //     }
    // }


    return res.status(200).send({
        code: 0,
        msg: 'ok',
        data: []
    })
}