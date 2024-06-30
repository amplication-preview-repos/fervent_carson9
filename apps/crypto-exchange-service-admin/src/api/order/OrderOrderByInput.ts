import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  transactionId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  walletId?: SortOrder;
};
