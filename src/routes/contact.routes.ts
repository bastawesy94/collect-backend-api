import { Router } from "express";
import {
  createContact,
  deleteContact,
  getContactByKey,
  searchContacts,
  updateContact,
} from "../controllers/contact.controller";
import {
  createContactValidator,
  updateContactValidator,
} from "../validators/contact.validator"; // Import contact validator
import { validate } from "../middlewares/validate";

const contactRoutes = Router();

// Apply authMiddleware to all contact-related routes
contactRoutes.post("/", createContactValidator, validate, createContact); // Apply the validator
contactRoutes.put("/:key", updateContactValidator, validate, updateContact); // Add validator if needed
contactRoutes.delete("/:key", deleteContact); // Add validator if needed
contactRoutes.get("/:key", getContactByKey); // Add validator if needed
contactRoutes.post("/search", searchContacts); // Add validator if needed

export default contactRoutes; // Ensure you're using default export
