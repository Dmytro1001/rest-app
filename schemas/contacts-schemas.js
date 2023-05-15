const Joi = require("joi");

const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;

const contactAddSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(phonePattern).required().message({
    "any.required": `Incorrect phone number format. Example: (099) 111-1111`,
  }),
});

module.exports = {
  contactAddSchema,
};
