const joi = require("joi");

const RegSchema = joi.object({
    username: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
});

const LoginSchema = joi.object({
    // username: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
});


module.exports = {
    RegSchema,
    LoginSchema,
}