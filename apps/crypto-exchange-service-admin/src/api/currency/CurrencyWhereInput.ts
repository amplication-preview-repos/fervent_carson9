import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { WalletListRelationFilter } from "../wallet/WalletListRelationFilter";

export type CurrencyWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  symbolField?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
  wallets?: WalletListRelationFilter;
};
