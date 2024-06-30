import { SortOrder } from "../../util/SortOrder";

export type CurrencyOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  symbolField?: SortOrder;
  updatedAt?: SortOrder;
};
