import { Transaction } from "../transaction/Transaction";
import { Wallet } from "../wallet/Wallet";

export type Currency = {
  createdAt: Date;
  id: string;
  name: string | null;
  price: number | null;
  symbolField: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  wallets?: Array<Wallet>;
};
