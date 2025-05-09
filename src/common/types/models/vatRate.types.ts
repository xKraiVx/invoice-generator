import { INode } from "@/common/types/general.types";
import { TMaybe } from "@/common/types/utility.types";

export interface IVatRate extends INode {
  rate: string;
  name: string;
  symbol: string;
  valid_from: string;
  valid_until: TMaybe<string>;
}
