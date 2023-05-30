const Joi = require("joi");

const loginSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({ "any.required": "missing required email field" }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({ "any.required": "missing required password field" }),
});

module.exports = loginSchema;
