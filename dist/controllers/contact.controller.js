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
        const userKey = req.body.userKey; // This will work now that we've extended the Request interface
        const contact = await contactService.createContact(userKey, req.body);
        res.status(201).json(contact);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
async function updateContact(req, res) {
    try {
        const userKey = req.body.userKey;
        const contactId = req.params.contactId;
        const updatedContact = await contactService.updateContact(userKey, contactId, req.body);
        res.status(200).json(updatedContact);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
async function deleteContact(req, res) {
    try {
        const userKey = req.body.user?.key;
        const contactId = req.params.contactId;
        await contactService.deleteContact(userKey, contactId);
        res.status(204).send();
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
async function getContactByKey(req, res) {
    try {
        const userKey = req.body.user?.key;
        const contactId = req.params.contactId;
        const contact = await contactService.getContactById(userKey, contactId);
        res.status(200).json(contact);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
async function searchContacts(req, res) {
    try {
        const userKey = req.body.user?.key;
        const options = req.body;
        const contacts = await contactService.searchContacts(userKey, options);
        res.status(200).json(contacts);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
