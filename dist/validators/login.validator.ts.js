"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidator = void 0;
const express_validator_1 = require("express-validator");
exports.loginValidator = [
    (0, express_validator_1.body)('username').isString().notEmpty().withMessage('Username is required'),
    (0, express_validator_1.body)('password').isString().notEmpty().withMessage('Password is required')
];
