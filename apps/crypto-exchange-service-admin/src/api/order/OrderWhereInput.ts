import { StringFilter } from "../../util/StringFilter";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  transaction?: TransactionWhereUniqueInput;
  typeField?: "Option1";
  wallet?: WalletWhereUniqueInput;
};
