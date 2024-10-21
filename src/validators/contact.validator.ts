import { body } from "express-validator";

export const createContactValidator = [
  body("userKey").isString().notEmpty().withMessage("User Key is required"),
  body("phone").isString().notEmpty().withMessage("Phone number is required"),
  body("address").isString().optional(), 
  body("notes").isString().optional(), 
];

export const updateContactValidator = [
  body("phone").isString().optional(),
  body("address").isString().optional(),
  body("notes").isString().optional(),
  body("userKey").isString().optional()
];
