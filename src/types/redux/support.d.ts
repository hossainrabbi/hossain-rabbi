import { ChefData, UserData } from "./chef";
import { CommonParams, GetResponse, InitialState } from "./common";

export interface SupportInitialState<T> extends InitialState {
  supports: {
    data: T[] | null;
    total: number;
  };
}

export interface SupportData {
  id: string;
  orderId: string;
  note: string;
  image: string;
  type: string;
  userId: string;
  user: UserData;
  chefId: string;
  chef: ChefData;
  status: string;
  createdAt: string;
  updatedAt: string;
}

// order data response
export interface SupportResponse extends GetResponse {
  supports: SupportData[];
}

// get support params
export interface SupportGETParams extends CommonParams {
  orderId?: string;
  customerName?: string;
  chefName?: string;
}

export interface SupportDataWithKey extends SupportData {
  key: string;
}
