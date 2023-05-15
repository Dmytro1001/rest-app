const express = require("express");

const contactsController = require("../../controllers/contacts-controllers");

// const schemas = require("../../schemas/contacts-schemas");

// const { validateBody } = require("../../decorators");

const router = express.Router();

router.get("/", contactsController.getAllContacts);

router.get("/:contactId", contactsController.getContactById);

router.post("/", contactsController.addContact);

router.put("/:contactId", contactsController.updateContactById);

router.delete("/:contactId", contactsController.deleteContactById);

module.exports = router;
