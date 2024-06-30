import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { OrderUpdateManyWithoutWalletsInput } from "./OrderUpdateManyWithoutWalletsInput";
import { TransactionUpdateManyWithoutWalletsInput } from "./TransactionUpdateManyWithoutWalletsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletUpdateInput = {
  balance?: number | null;
  currency?: CurrencyWhereUniqueInput | null;
  orders?: OrderUpdateManyWithoutWalletsInput;
  transactions?: TransactionUpdateManyWithoutWalletsInput;
  user?: UserWhereUniqueInput | null;
};
