import { TransactionUpdateManyWithoutCurrenciesInput } from "./TransactionUpdateManyWithoutCurrenciesInput";
import { WalletUpdateManyWithoutCurrenciesInput } from "./WalletUpdateManyWithoutCurrenciesInput";

export type CurrencyUpdateInput = {
  name?: string | null;
  price?: number | null;
  symbolField?: string | null;
  transactions?: TransactionUpdateManyWithoutCurrenciesInput;
  wallets?: WalletUpdateManyWithoutCurrenciesInput;
};
