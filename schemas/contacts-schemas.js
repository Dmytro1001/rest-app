const Joi = require("joi");

const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;

const contactAddSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().required().email().messages({
    "string.email": "Must be a valid email address",
    "any.required": "Email is required",
  }),
  phone: Joi.string().pattern(phonePattern).required().messages({
    "string.pattern.base":
      "Incorrect phone number format. Example: (099) 111-1111",
    "any.required": "Phone number is required",
  }),
});

module.exports = { contactAddSchema };
