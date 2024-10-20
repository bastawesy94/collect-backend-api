"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
const contactSchema = new mongoose_1.Schema({
    key: { type: String, required: true, default: uuid_1.v4, unique: true },
    phone: { type: String, required: true },
    address: { type: String },
    notes: { type: String },
    userKey: { type: String, required: true },
});
exports.Contact = (0, mongoose_1.model)("Contact", contactSchema);
