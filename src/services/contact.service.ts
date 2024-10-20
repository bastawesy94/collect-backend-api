// src/services/contact.service.ts

import { CreateContactDto, UpdateContactDto } from "../dtos/contact.DTO";
import { Contact } from "../models/contact.model";
import { IContactService } from "./interfaces/contact.service.interface";
import { ISearchOptions } from "./interfaces/ISearch.options";
import { ISearchContactsResponse } from "./interfaces/ISearch.results";

export class ContactService implements IContactService {
  async createContact(
    contactData: CreateContactDto,
  ): Promise<Partial<CreateContactDto>> {
    const contact = new Contact(contactData);
    return (await contact.save()) as CreateContactDto;
  }

  async updateContact(
    contactKey: string,
    contactData: UpdateContactDto,
  ): Promise<Partial<UpdateContactDto>> {
    const contact = await Contact.findOneAndUpdate(
      { key: contactKey },
      { $set: contactData },
      { new: true },
    );
    if (!contact) {
      throw new Error("Contact not found or unauthorized");
    }
    return contact as UpdateContactDto;
  }

  async deleteContact(contactKey: string): Promise<void> {
    const result = await Contact.deleteOne({ key: contactKey });
    if (result.deletedCount === 0) {
      throw new Error("Contact not found or unauthorized");
    }
  }

  async getContactByKey(
    contactKey: string,
  ): Promise<Partial<CreateContactDto>> {
    console.log("contactKey --->",contactKey);
    const contact = await Contact.findOne({ key: contactKey });
    if (!contact) {
      throw new Error("Contact not found or unauthorized");
    }
    return contact as CreateContactDto;
  }
  async searchContacts(
    options: ISearchOptions,
  ): Promise<ISearchContactsResponse> {
    const { limit = 5, page = 1, select = [], order } = options;
  
    // Base query to calculate total count of documents
    const total = await Contact.countDocuments();
  
    // Base query for fetching results
    const query = Contact.find();
  
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
      total,                          // Total count of contacts in the database
      resultCount: contacts.length,   // Number of results in the current page
      page,                           // Current page number
      data: contacts as Partial<CreateContactDto>[], // Contact data
    };
  }  
}
