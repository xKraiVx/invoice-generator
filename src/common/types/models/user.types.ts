import { INode } from "@/common/types/general.types";
import { ICompany } from "@/common/types/models/company.types";
import { TMaybe } from "@/common/types/utility.types";

export enum EUserRole {
  ADMIN = "admin",
  OWNER = "owner",
}

export interface IUser extends INode {
  email: string;
  username: string;
  site: string;
  role: EUserRole;
  company: TMaybe<ICompany>;
}
