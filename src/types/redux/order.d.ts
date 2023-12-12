import { ChefData, UserData } from "./chef";
import { CommonParams, GetResponse, InitialState } from "./common";

export interface OrderInitialState<T> extends InitialState {
  orders: {
    data: T[] | null;
    total: number;
  };
}

export interface LogsData {
  createdBy: UserData;
  value: string;
  datetime: string;
  note: string;
  image: string | null;
}

export interface OrderData {
  id: string;
  orderId: string;
  userId: string;
  user: UserData;
  chefId: string;
  chef: ChefData;
  menuId: string;
  menu: {
    id: string;
    title: string;
    type: string;
    price: number;
    discountedPrice: number;
    menus: string[];
    orderTakingInstruction: string | null;
    deliveryDay: string;
    deliveryFrom: number;
    deliveryTo: number;
    orderTakingBeforeDelivery: number;
    deliveryInstruction: string | null;
    isPickUpAvailable: boolean;
    isDeliveryAvailable: boolean;
    images: string[];
    chefId: string;
    chef: ChefData;
    createdAt: string;
    updatedAt: string;
    location: {
      x: number;
      y: number;
      coordinates: number[];
      type: string;
    };
    isActive: boolean;
    rating: number;
    numberOfRating: number;
    isHotDeal: boolean;
    cuisine: string;
    alreadyInWishList: boolean | null;
  };
  quantity: number;
  price: number;
  deliveryCharge: number;
  deliveryAddress: string;
  deliveryOption: string;
  paymentStatus: string;
  paymentRequested: boolean;
  paymentNoteByCustomer: string | null;
  paymentProofByCustomer: string | null;
  isPaymentConfirmed: boolean;
  isAcceptedByChef: number;
  isReadyForPickUp: boolean;
  status: string;
  statusLogs: LogsData[];
  deliveryDay: string;
  deliveryFrom: string;
  deliveryTo: string;
  createdAt: string;
  updatedAt: string;
  alreadyReviewed: boolean;
  alreadyReviewedByChef: boolean;
  customerReview: string | null;
  chefReview: string | null;
  deliveryTime: string | null;
  firstTimeOrderForThisChef: boolean;
  customerStatus: string;
  dateAndTimeLogs: LogsData[];
  paymentLogs: string | null;
  deliveryLogs: string | null;
}

// order data response
export interface OrderResponse extends GetResponse {
  orders: OrderData[];
}

// get order params
export interface OrderGETParams extends CommonParams {
  orderId?: string;
  customerName?: string;
  chefName?: string;
}

export interface OrderDataWithKey extends OrderData {
  key: string;
}
