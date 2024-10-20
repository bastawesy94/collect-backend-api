// src/dtos/contact.dto.ts
export interface CreateContactDto {
    key: string;
    phone: string;
    address: string;
    notes: string;
    userKey: string; // This will link the contact to a user
  }
  export interface UpdateContactDto {
    key: string;
    phone: string;
    address: string;
    notes: string;
    userKey: string; // This will link the contact to a user
  }
  
