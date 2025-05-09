import { INode } from "@/common/types/general.types";
import { TMaybe } from "@/common/types/utility.types";

export interface ICompany extends INode {
  firstName: TMaybe<string>;
  lastName: TMaybe<string>;
  companyName: string;
  ownerName: string;
  ownerSurname: string;
  street: string;
  streetName: string;
  streetNumber: string;
  flatNumber: string;
  city: string;
  postalCode: string;
  taxId: string;
  identifier: TMaybe<string>;
  regon: string;
  phoneNumber: string;
  mailingCompanyName: TMaybe<string>;
  mailingStreet: TMaybe<string>;
  mailingCity: TMaybe<string>;
  mailingPostalCode: TMaybe<string>;
  businessActivityCode: string;
}
