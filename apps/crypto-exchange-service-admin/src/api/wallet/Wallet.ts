import { Currency } from "../currency/Currency";
import { Order } from "../order/Order";
import { Transaction } from "../transaction/Transaction";
import { User } from "../user/User";

export type Wallet = {
  balance: number | null;
  createdAt: Date;
  currency?: Currency | null;
  id: string;
  orders?: Array<Order>;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  user?: User | null;
};
