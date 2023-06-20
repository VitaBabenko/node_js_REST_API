const express = require("express");

const contactsController = require("../../controllers/contacts-controller");

const { schemas } = require("../../models/contact");

const { validateBody, isValidId, authenticate } = require("../../decorators");

const router = express.Router();

router.get("/", authenticate, contactsController.getAllContacts);

router.post(
  "/",
  authenticate,
  validateBody(schemas.contactAddSchema),
  contactsController.addContact
);

router.delete(
  "/:id",
  authenticate,
  isValidId,
  contactsController.deleteContactById
);

module.exports = router;
