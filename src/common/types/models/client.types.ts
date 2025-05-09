import { INode } from "@/common/types/general.types";
import { TMaybe } from "@/common/types/utility.types";

export enum EClientType {
  INDIVIDUAL = "INDIVIDUAL",
  PRIVATE_ENTERPRISE = "private_enterprise",
  ANOTHER = "another",
}

export interface IClientCompanyInfo {
  nip: string;
  companyName: string;
}

export interface IClientPersonInfo {
  firstName: string;
  lastName: string;
}

export interface IAddress {
  street: string;
  houseNumber: string;
  apartmentNumber: string;
  city: string;
  zipCode: string;
  country: string;
}

export interface IClient extends INode {
  uuid: string;
  address: IAddress;
  notes: TMaybe<string>;
}

export interface IClientIndividual extends IClient {
  type: EClientType.INDIVIDUAL;
  personInfo: IClientPersonInfo;
}

export interface IClientPrivateEnterprise extends IClient {
  type: EClientType.PRIVATE_ENTERPRISE;
  companyInfo: IClientCompanyInfo;
}

export interface IClientAnother extends IClient {
  type: EClientType.ANOTHER;
  companyInfo: IClientCompanyInfo;
  personInfo: IClientPersonInfo;
}

export type TClient =
  | IClientIndividual
  | IClientPrivateEnterprise
  | IClientAnother;
