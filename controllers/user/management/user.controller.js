const { UserManagement } = require('../../../modules');
const { userManagementLoginValidation } = require('../../../validations');
const { createToken } = require('../../../verify/verifyToken');

exports.login = async(req, res) => {
    const { error } = userManagementLoginValidation(req.body);
    if(error) {
        return res.status(500).send({
            code: 1,
            msg: error.details[0].message
        });
    }

    const user = await UserManagement.findOne({
        ...req.body
    });

    if(!user) {
        return res.status(200).send({
            code: 2,
            msg: '用户名或密码不对'
        });
    }

    const token = createToken({name: req.body.name});
    res.header('Authorization', token).send({
        code: 0,
        msg: 'ok',
        token: createToken({
            name: req.body.name
        })
    });
};


exports.register = (req, res) => {
    const userManagement = new UserManagement({
        name: 'aaaaaa',
        psw: '111111',
        role: 0
    });
    userManagement.save((err) => {
        console.log(err);
    });
    res.send({
        code: 0
    })
    // return res.status(200).send({
    //     code: 0,
    //     msg: '0k register'
    // });
}