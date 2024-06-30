import { Currency } from "../currency/Currency";
import { Order } from "../order/Order";
import { Wallet } from "../wallet/Wallet";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  currency?: Currency | null;
  id: string;
  orders?: Array<Order>;
  status?: "Option1" | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  wallet?: Wallet | null;
};
