const Joi = require("joi");

const updateSubscribeSchema = Joi.object({
  subscription: Joi.string()
    .required()
    .valid("starter", "pro", "business")
    .messages({
      "any.required": "missing field subscription",
      "any.only": "Can be only 'starter', 'pro', 'business'",
    }),
});

module.exports = updateSubscribeSchema;
