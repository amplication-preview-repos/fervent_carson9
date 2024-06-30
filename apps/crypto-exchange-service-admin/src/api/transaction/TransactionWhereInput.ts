import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  currency?: CurrencyWhereUniqueInput;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  status?: "Option1";
  typeField?: "Option1";
  wallet?: WalletWhereUniqueInput;
};
