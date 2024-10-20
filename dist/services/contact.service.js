"use strict";
// src/services/contact.service.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const contact_model_1 = require("../models/contact.model");
class ContactService {
    async createContact(userKey, contactData) {
        const contact = new contact_model_1.Contact({ ...contactData, userKey });
        return await contact.save();
    }
    async updateContact(userKey, contactId, contactData) {
        const contact = await contact_model_1.Contact.findOneAndUpdate({ _id: contactId, userKey }, { $set: contactData }, { new: true });
        if (!contact) {
            throw new Error('Contact not found or unauthorized');
        }
        return contact;
    }
    async deleteContact(userKey, contactId) {
        const result = await contact_model_1.Contact.deleteOne({ key: contactId });
        if (result.deletedCount === 0) {
            throw new Error('Contact not found or unauthorized');
        }
    }
    async getContactById(userKey, contactId) {
        const contact = await contact_model_1.Contact.findOne({ _id: contactId, userKey });
        if (!contact) {
            throw new Error('Contact not found or unauthorized');
        }
        return contact;
    }
    async searchContacts(userKey, options) {
        const { limit = 5, page = 1 } = options;
        const contacts = await contact_model_1.Contact.find({ userKey })
            .skip((page - 1) * limit)
            .limit(limit);
        return contacts;
    }
}
exports.ContactService = ContactService;
