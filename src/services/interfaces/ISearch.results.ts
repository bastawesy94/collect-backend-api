import { CreateContactDto } from "../../dtos/contact.DTO";

export interface ISearchContactsResponse {
    total: number;
    resultCount: number;
    page: number;
    data: Partial<CreateContactDto>[];
  }
  