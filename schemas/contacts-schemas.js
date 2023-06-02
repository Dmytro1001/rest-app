const Joi = require("joi");

// const phonePattern = /^\(\d{3}\)\s\d{3}-\d{4}$/;

const contactAddSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(20)
    .required()
    .messages({ "any.required": "missing required name field" }),
  email: Joi.string()
    .required()
    .email()
    .messages({ "any.required": "missing required email field" }),
  phone: Joi.string()
    // .pattern(phonePattern)
    .required()
    .messages({ "any.required": "missing required phone field" }),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .messages({ "any.required": "missing field favorite" }),
});

module.exports = {
  contactAddSchema,
  updateFavoriteSchema,
};

// module.exports = contactAddSchema;
