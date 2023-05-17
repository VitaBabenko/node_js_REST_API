const { Contact } = require("../models/contact");

const { HttpError } = require("../helpers");

const { ctrlWrapper } = require("../decorators");

const getAllContacts = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findOne(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

// const updateContactById = async (req, res) => {
//   const { id } = req.params;
//   const result = await contactsService.updateContact(id, req.body);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }

//   res.json(result);
// };

// const deleteContactById = async (req, res) => {
//   const { id } = req.params;
//   const result = await contactsService.removeContact(id);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }

//   res.status(204).send();
// };

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  // updateContactById: ctrlWrapper(updateContactById),
  // deleteContactById: ctrlWrapper(deleteContactById),
};
