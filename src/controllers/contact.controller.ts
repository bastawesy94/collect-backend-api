// src/controllers/contact.controller.ts
import { Request, Response } from 'express';
import { ContactService } from '../services/contact.service';
import { IContactService } from '../services/interfaces/contact.service.interface';

const contactService: IContactService = new ContactService();

  export async function createContact(req: Request, res: Response) {
    try {
      const userKey = req.body.userKey; // This will work now that we've extended the Request interface
      const contact = await contactService.createContact(userKey!!, req.body);
      res.status(201).json(contact);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

export async function updateContact(req: Request, res: Response) {
    try {
      const userKey = req.body.userKey;
      const contactId = req.params.contactId;
      const updatedContact = await contactService.updateContact(userKey!, contactId, req.body);
      res.status(200).json(updatedContact);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  export async function deleteContact(req: Request, res: Response) {
    try {
      const userKey = req.body.user?.key;
      const contactId = req.params.contactId;
      await contactService.deleteContact(userKey!, contactId);
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  export async function getContactByKey(req: Request, res: Response) {
    try {
      const userKey = req.body.user?.key;
      const contactId = req.params.contactId;
      const contact = await contactService.getContactById(userKey!, contactId);
      res.status(200).json(contact);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  export async function searchContacts(req: Request, res: Response) {
    try {
      const userKey = req.body.user?.key;
      const options = req.body;
      const contacts = await contactService.searchContacts(userKey!, options);
      res.status(200).json(contacts);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }