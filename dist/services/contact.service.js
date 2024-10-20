"use strict";
// src/services/contact.service.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const contact_model_1 = require("../models/contact.model");
class ContactService {
    async createContact(contactData) {
        const contact = new contact_model_1.Contact(contactData);
        return (await contact.save());
    }
    async updateContact(contactKey, contactData) {
        const contact = await contact_model_1.Contact.findOneAndUpdate({ key: contactKey }, { $set: contactData }, { new: true });
        if (!contact) {
            throw new Error("Contact not found or unauthorized");
        }
        return contact;
    }
    async deleteContact(contactKey) {
        const result = await contact_model_1.Contact.deleteOne({ key: contactKey });
        if (result.deletedCount === 0) {
            throw new Error("Contact not found or unauthorized");
        }
    }
    async getContactByKey(contactKey) {
        console.log("contactKey --->", contactKey);
        const contact = await contact_model_1.Contact.findOne({ key: contactKey });
        if (!contact) {
            throw new Error("Contact not found or unauthorized");
        }
        return contact;
    }
    async searchContacts(options) {
        const { limit = 5, page = 1, select = [], order } = options;
        // Base query to calculate total count of documents
        const total = await contact_model_1.Contact.countDocuments();
        // Base query for fetching results
        const query = contact_model_1.Contact.find();
        // Apply field selection if provided
        if (select.length) {
            query.select(select.join(" ")); // Mongoose expects a space-separated string of fields
        }
        // Apply pagination
        query.skip((page - 1) * limit).limit(limit);
        // Apply sorting if the order field is provided
        if (order) {
            query.sort({ [order.field]: order.direction === "asc" ? 1 : -1 });
        }
        // Fetch contacts
        const contacts = await query.exec();
        // Construct the result object
        return {
            total, // Total count of contacts in the database
            resultCount: contacts.length, // Number of results in the current page
            page, // Current page number
            data: contacts, // Contact data
        };
    }
}
exports.ContactService = ContactService;
