const Joi = require("joi");

const registerSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({ "any.required": "missing required email field" }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({ "any.required": "missing required password field" }),
  subscription: Joi.string().valid("starter", "pro", "business"),
});

module.exports = registerSchema;
