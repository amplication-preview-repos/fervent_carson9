import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type OrderUpdateInput = {
  status?: "Option1" | null;
  transaction?: TransactionWhereUniqueInput | null;
  typeField?: "Option1" | null;
  wallet?: WalletWhereUniqueInput | null;
};
