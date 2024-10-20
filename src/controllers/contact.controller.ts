import { Request, Response } from "express";
import { ContactService } from "../services/contact.service";
import { IContactService } from "../services/interfaces/contact.service.interface";

const contactService: IContactService = new ContactService();

export async function createContact(req: Request, res: Response) {
  try {
    const contact = await contactService.createContact(req.body);
    res.status(201).json(contact);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function updateContact(req: Request, res: Response) {
  try {
    const contactKey = req.params.key;
    const updatedContact = await contactService.updateContact(
      contactKey,
      req.body,
    );
    res.status(200).json(updatedContact);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteContact(req: Request, res: Response) {
  try {
    const contactKey = req.params.key;
    await contactService.deleteContact(contactKey);
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getContactByKey(req: Request, res: Response) {
  try {
    const contactKey = req.params.key;
    const contact = await contactService.getContactByKey(contactKey);
    res.status(200).json(contact);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function searchContacts(req: Request, res: Response) {
  try {
    const options = req.body;
    const contacts = await contactService.searchContacts(options);
    res.status(200).json(contacts);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
