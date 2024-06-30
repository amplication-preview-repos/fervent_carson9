import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { OrderCreateNestedManyWithoutTransactionsInput } from "./OrderCreateNestedManyWithoutTransactionsInput";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  currency?: CurrencyWhereUniqueInput | null;
  orders?: OrderCreateNestedManyWithoutTransactionsInput;
  status?: "Option1" | null;
  typeField?: "Option1" | null;
  wallet?: WalletWhereUniqueInput | null;
};
