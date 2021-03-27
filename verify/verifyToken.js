const jwt = require('jsonwebtoken');

function createToken(palyload) {
    return jwt.sign(palyload, process.env.TOKEN_SECRET);
}

function verifyToken(req, res, next) {
    const token = req.header('Authorization');

    if( !token ) {
        return res.status(401).send({
            code: 401,
            msg: 'Access Denied'
        });
    }

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch(err) {
        return res.status(200).send({
            code: 403,
            msg: 'Invalid Token'
        });
    }
}

module.exports = {
    createToken, verifyToken
}