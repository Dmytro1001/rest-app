const ctrlWrapper = require("./ctrlWrapper");
const validateBody = require("./validateBody");
const validateStatusBody = require("./validateStatusBody");
const isValidId = require("./isValidId");
const authenticate = require("./authenticate");
const upload = require("./upload");

module.exports = {
  ctrlWrapper,
  validateBody,
  validateStatusBody,
  isValidId,
  authenticate,
  upload,
};
