"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_validator_ts_1 = require("../validators/login.validator.ts");
const login_controller_1 = require("../controllers/login.controller");
const validate_1 = require("../middlewares/validate");
const authRoutes = (0, express_1.Router)();
// Login route
authRoutes.post('/login', login_validator_ts_1.loginValidator, validate_1.validate, login_controller_1.login); // Ensure the return type of `login` is properly handled
exports.default = authRoutes; // Ensure you're using default export
