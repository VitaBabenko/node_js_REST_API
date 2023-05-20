const express = require("express");

const contactsController = require("../../controllers/contacts-controller");

const { schemas } = require("../../models/contact");

const { validateBody, isValidId, authenticate } = require("../../decorators");

const router = express.Router();

router.get("/", authenticate, contactsController.getAllContacts);

router.get("/:id", authenticate, isValidId, contactsController.getContactById);

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

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.contactAddSchema),
  contactsController.updateContactById
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  contactsController.updateStatusContact
);

module.exports = router;
