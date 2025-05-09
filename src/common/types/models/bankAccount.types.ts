export interface IBankAccount {
  uuid: string;
  bank_name: string;
  accountNumber: string;
  swift: string;
  default: boolean;
  currency: string;
  customName: string;
}
