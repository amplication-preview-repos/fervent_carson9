import { TransactionCreateNestedManyWithoutCurrenciesInput } from "./TransactionCreateNestedManyWithoutCurrenciesInput";
import { WalletCreateNestedManyWithoutCurrenciesInput } from "./WalletCreateNestedManyWithoutCurrenciesInput";

export type CurrencyCreateInput = {
  name?: string | null;
  price?: number | null;
  symbolField?: string | null;
  transactions?: TransactionCreateNestedManyWithoutCurrenciesInput;
  wallets?: WalletCreateNestedManyWithoutCurrenciesInput;
};
