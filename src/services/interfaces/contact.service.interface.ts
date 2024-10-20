// src/services/contact.service.interface.ts

import { CreateContactDto, UpdateContactDto } from "../../dtos/contact.DTO";
import { ISearchOptions } from "./ISearch.options";
import { ISearchContactsResponse } from "./ISearch.results";

export interface IContactService {
  createContact(
    contactData: CreateContactDto,
  ): Promise<Partial<CreateContactDto>>;
  updateContact(
    contactKey: string,
    UpdateContactDto: UpdateContactDto,
  ): Promise<Partial<UpdateContactDto>>;
  deleteContact(contactKey: string): Promise<void>;
  getContactByKey(contactKey: string): Promise<Partial<CreateContactDto>>;
  searchContacts(options: ISearchOptions): Promise<ISearchContactsResponse>;
}
