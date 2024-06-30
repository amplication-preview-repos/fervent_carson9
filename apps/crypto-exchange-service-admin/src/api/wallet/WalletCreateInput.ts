import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { OrderCreateNestedManyWithoutWalletsInput } from "./OrderCreateNestedManyWithoutWalletsInput";
import { TransactionCreateNestedManyWithoutWalletsInput } from "./TransactionCreateNestedManyWithoutWalletsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletCreateInput = {
  balance?: number | null;
  currency?: CurrencyWhereUniqueInput | null;
  orders?: OrderCreateNestedManyWithoutWalletsInput;
  transactions?: TransactionCreateNestedManyWithoutWalletsInput;
  user?: UserWhereUniqueInput | null;
};
