"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContact = createContact;
exports.updateContact = updateContact;
exports.deleteContact = deleteContact;
exports.getContactByKey = getContactByKey;
exports.searchContacts = searchContacts;
const contact_service_1 = require("../services/contact.service");
const contactService = new contact_service_1.ContactService();
async function createContact(req, res) {
    try {
        const contact = await contactService.createContact(req.body);
        res.status(201).json(contact);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
async function updateContact(req, res) {
    try {
        const contactKey = req.params.key;
        const updatedContact = await contactService.updateContact(contactKey, req.body);
        res.status(200).json(updatedContact);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
async function deleteContact(req, res) {
    try {
        const contactKey = req.params.key;
        await contactService.deleteContact(contactKey);
        res.status(204).send();
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
async function getContactByKey(req, res) {
    try {
        const contactKey = req.params.key;
        const contact = await contactService.getContactByKey(contactKey);
        res.status(200).json(contact);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
async function searchContacts(req, res) {
    try {
        const options = req.body;
        const contacts = await contactService.searchContacts(options);
        res.status(200).json(contacts);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
