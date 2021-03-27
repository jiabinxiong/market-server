const Joi = require('joi');

const userManagementLoginValidation = data => {
    const schema = Joi.object({
        name: Joi.string()
            .min(6)
            .required(),
        psw: Joi.string()
            .min(6).
            required(),
        role: Joi.number()
            .integer()
            .required()    
    });

    return schema.validate(data);
};

module.exports = {
    userManagementLoginValidation
}