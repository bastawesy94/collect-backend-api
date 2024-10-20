"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateContactValidator = exports.createContactValidator = void 0;
const express_validator_1 = require("express-validator");
exports.createContactValidator = [
    (0, express_validator_1.body)("userKey").isString().notEmpty().withMessage("User Key is required"),
    (0, express_validator_1.body)("phone").isString().notEmpty().withMessage("Phone number is required"),
    (0, express_validator_1.body)("address").isString().optional(), // Optional field
    (0, express_validator_1.body)("notes").isString().optional(), // Optional field
];
exports.updateContactValidator = [
    (0, express_validator_1.body)("phone").isString().optional(),
    (0, express_validator_1.body)("address").isString().optional(), // Optional field
    (0, express_validator_1.body)("notes").isString().optional(), // Optional field
    (0, express_validator_1.body)("userKey").isString().optional()
];
