import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { OrderUpdateManyWithoutTransactionsInput } from "./OrderUpdateManyWithoutTransactionsInput";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  currency?: CurrencyWhereUniqueInput | null;
  orders?: OrderUpdateManyWithoutTransactionsInput;
  status?: "Option1" | null;
  typeField?: "Option1" | null;
  wallet?: WalletWhereUniqueInput | null;
};
