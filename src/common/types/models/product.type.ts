import { INode } from "@/common/types/general.types";
import { TMaybe } from "@/common/types/utility.types";

export interface IProduct extends INode {
  uuid: string;
  name: string;
  symbol: TMaybe<string>;
  pkwiu: TMaybe<string>;
  cn: TMaybe<string>;
  pkob: TMaybe<string>;
  unit: TMaybe<string>;
  tax_symbol: string;
  flat_rate_tax_symbol: TMaybe<string>;
  quantity: number;
  net_price: number;
  tax_price: number;
  gross_price: number;
  unit_net_price: number;
  purchase_unit_net_price: number;
  purchase_unit_gross_price: number;
  discount: string;
  unit_net_price_before_discount: number;
  vat_exemption_reason: TMaybe<string>;
  gtu_id: TMaybe<string>;
}
