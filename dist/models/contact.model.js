"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
// src/models/contact.ts
const mongoose_1 = require("mongoose");
const contactSchema = new mongoose_1.Schema({
    key: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String },
    notes: { type: String },
    userKey: { type: String, required: true }, // Association with User
});
exports.Contact = (0, mongoose_1.model)('Contact', contactSchema);
