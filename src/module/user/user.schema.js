const Joi = require('joi');

const storeUserSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    address: Joi.string(),
    phone: Joi.string(),
});

const updateUserSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
    address: Joi.string(),
    phone: Joi.string(),
});

module.exports = {
    storeUserSchema,
    updateUserSchema
}