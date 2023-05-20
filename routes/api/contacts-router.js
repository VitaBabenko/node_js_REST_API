const express = require("express");

const contactsController = require("../../controllers/contacts-controller");

const { schemas } = require("../../models/contact");

const { validateBody, isValidId } = require("../../decorators");

const router = express.Router();

router.get("/", contactsController.getAllContacts);

router.get("/:id", isValidId, contactsController.getContactById);

router.post(
  "/",
  validateBody(schemas.contactAddSchema),
  contactsController.addContact
);

router.delete("/:id", isValidId, contactsController.deleteContactById);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.contactAddSchema),
  contactsController.updateContactById
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  contactsController.updateStatusContact
);

module.exports = router;
