import { INode } from "@/common/types/general.types";

export interface IServiceClassification extends INode {
  name: string;
  short_description: string;
  description: string;
}
