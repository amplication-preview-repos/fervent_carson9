import { Transaction } from "../transaction/Transaction";
import { Wallet } from "../wallet/Wallet";

export type Order = {
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  transaction?: Transaction | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  wallet?: Wallet | null;
};
