import { INode } from "@/common/types/general.types";
import { IBankAccount } from "@/common/types/models/bankAccount.types";
import { TClient } from "@/common/types/models/client.types";
import { IProduct } from "@/common/types/models/product.type";
import { IServiceClassification } from "@/common/types/models/serviceClasification.types";
import { TMaybe } from "@/common/types/utility.types";

export enum EInvoiceTypeOfSale {
  SERVICE = "service",
  PRODUCT = "product",
}

export interface IInvoice extends INode {
  uuid: string;
  client: TClient;
  currency: string;
  payment: TMaybe<IBankAccount>;
  typeOfSale: EInvoiceTypeOfSale;
  serviceClassification: TMaybe<IServiceClassification>;
  products: IProduct[];
}
