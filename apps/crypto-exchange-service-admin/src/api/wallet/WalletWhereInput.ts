import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletWhereInput = {
  balance?: FloatNullableFilter;
  currency?: CurrencyWhereUniqueInput;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  transactions?: TransactionListRelationFilter;
  user?: UserWhereUniqueInput;
};
