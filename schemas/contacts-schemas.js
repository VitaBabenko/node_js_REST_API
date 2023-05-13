const Joi = require("joi");

const contactAddSchema = Joi.object({
  name: Joi.string().min(2).max(255).required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(/^\+|\d[\s\d\-\(\)]*\d$/)
    .required(),
});

module.exports = {
  contactAddSchema,
};
