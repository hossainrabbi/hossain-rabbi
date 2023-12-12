import { CommonParams, GetResponse, InitialState } from "./common";

export interface ChefInitialState<T> extends InitialState {
  chefs: {
    data: T[] | null;
    total: number;
  };
}

export interface UserData {
  id: string;
  mobileNumber: string;
  name: string;
  profilePicture: string;
  rating: number;
  email: string;
}

export interface ChefData {
  id: string;
  name: string;
  mobileNumber: string;
  profilePicture: string;
  banner: string;
  createdAt: string;
  updatedAt: string;
  referralCode: string | null;
  rating: number;
  numberOfRating: number;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  location: {
    latitude: number;
    longitude: number;
  };
  paymentInstruction: string;
  userId: string;
  user: UserData;
  isFollowed: boolean | null;
  about: string;
  isHotDeal: boolean | null;
  experience: number;
  cuisines: string[];
  numberOfItem: number | null;
}

// chef data response
export interface ChefResponse extends GetResponse {
  chefs: ChefData[];
}

// get chef params
export interface ChefGETParams extends CommonParams {
  name?: string;
  cuisine?: string;
}

export interface ChefDataWithKey extends ChefData {
  key: string;
}
