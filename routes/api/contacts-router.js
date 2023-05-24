const express = require("express");

const contactsController = require("../../controllers/contacts-controllers");

const schemas = require("../../schemas");

const {
  validateBody,
  validateStatusBody,
  isValidId,
} = require("../../decorators");

const router = express.Router();

router.get(
  "/",

  contactsController.getAllContacts
);

router.get("/:contactId", isValidId, contactsController.getContactById);

router.post(
  "/",
  validateBody(schemas.contactAddSchema),
  contactsController.addContact
);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.contactAddSchema),
  contactsController.updateContactById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateStatusBody(schemas.updateFavoriteSchema),
  contactsController.updateStatusContact
);

router.delete("/:contactId", isValidId, contactsController.deleteContactById);

module.exports = router;
