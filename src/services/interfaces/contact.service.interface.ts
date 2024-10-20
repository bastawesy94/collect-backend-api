// src/services/contact.service.interface.ts

import { CreateContactDto, UpdateContactDto } from "../../dtos/contact.DTO";

export interface IContactService {
  createContact(userKey: string, contactData: CreateContactDto): Promise<Partial<CreateContactDto>>;
  updateContact(userKey: string, contactId: string, UpdateContactDto: UpdateContactDto): Promise<Partial<UpdateContactDto>>;
  deleteContact(userKey: string, contactId: string): Promise<void>;
  getContactById(userKey: string, contactId: string): Promise<Partial<CreateContactDto>>;
  searchContacts(userKey: string, options: any): Promise<Partial<CreateContactDto>[]>;
}
