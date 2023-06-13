const {
  contactAddSchema,
  updateFavoriteSchema,
} = require("./contacts-schemas");
const registerSchema = require("./register-schemas");
const loginSchema = require("./login-schemas");
const updateSubscribeSchema = require("./updateSubscribe-schema");
const verifySchema = require("./verify-schemas");

const schemas = {
  contactAddSchema,
  updateFavoriteSchema,
  registerSchema,
  loginSchema,
  updateSubscribeSchema,
  verifySchema,
};

module.exports = schemas;
