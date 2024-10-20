"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contact_controller_1 = require("../controllers/contact.controller");
const contact_validator_1 = require("../validators/contact.validator"); // Import contact validator
const validate_1 = require("../middlewares/validate");
const contactRoutes = (0, express_1.Router)();
// Apply authMiddleware to all contact-related routes
contactRoutes.post("/", contact_validator_1.createContactValidator, validate_1.validate, contact_controller_1.createContact); // Apply the validator
contactRoutes.put("/:key", contact_validator_1.updateContactValidator, validate_1.validate, contact_controller_1.updateContact); // Add validator if needed
contactRoutes.delete("/:key", contact_controller_1.deleteContact); // Add validator if needed
contactRoutes.get("/:key", contact_controller_1.getContactByKey); // Add validator if needed
contactRoutes.post("/search", contact_controller_1.searchContacts); // Add validator if needed
exports.default = contactRoutes; // Ensure you're using default export
