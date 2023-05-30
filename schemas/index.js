const {
  contactAddSchema,
  updateFavoriteSchema,
} = require("./contacts-schemas");
const registerSchema = require("./register-schemas");
const loginSchema = require("./login-schemas");
const updateSubscribeSchema = require("./updateSubscribe-schema");

const schemas = {
  contactAddSchema,
  updateFavoriteSchema,
  registerSchema,
  loginSchema,
  updateSubscribeSchema,
};

module.exports = schemas;
