// src/services/contact.service.ts

import { CreateContactDto, UpdateContactDto } from "../dtos/contact.DTO";
import { Contact } from "../models/contact.model";
import { IContactService } from "./interfaces/contact.service.interface";

export class ContactService implements IContactService {
  async createContact(userKey: string, contactData: CreateContactDto): Promise <Partial<CreateContactDto>> {
    const contact = new Contact({ ...contactData, userKey });
    return await contact.save() as CreateContactDto;
  }

  async updateContact(userKey: string, contactId: string, contactData: UpdateContactDto): Promise<Partial<UpdateContactDto>> {
    const contact = await Contact.findOneAndUpdate(
      { _id: contactId, userKey },
      { $set: contactData },
      { new: true }
    );
    if (!contact) {
      throw new Error('Contact not found or unauthorized');
    }
    return contact as UpdateContactDto;
  }

  async deleteContact(userKey: string, contactId: string): Promise<void> {
    const result = await Contact.deleteOne({ key: contactId });
    if (result.deletedCount === 0) {
      throw new Error('Contact not found or unauthorized');
    }
  }

  async getContactById(userKey: string, contactId: string): Promise<Partial<CreateContactDto>> {
    const contact = await Contact.findOne({ _id: contactId, userKey });
    if (!contact) {
      throw new Error('Contact not found or unauthorized');
    }
    return contact as CreateContactDto;
  }

  async searchContacts(userKey: string, options: any): Promise<Partial<CreateContactDto>[]> {
    const { limit = 5, page = 1 } = options;
    const contacts = await Contact.find({ userKey })
      .skip((page - 1) * limit)
      .limit(limit);
    return contacts as CreateContactDto[];
  }
}
