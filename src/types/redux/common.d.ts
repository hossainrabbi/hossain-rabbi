// post request
export interface PostRequest<DataT, OthersT> {
  data: DataT;
  others: OthersT;
}

// common options for params query
export interface CommonParams {
  page: number;
  limit: number;
}

export interface PostOthers {
  reRender: (val: boolean) => void;
  toastMessage: (type: IconType, msg: string) => void;
}

// common initial state
export interface InitialState {
  error: string;
  loading: boolean;
  postLoading: boolean;
  updateLoading: boolean;
  deleteLoading: boolean;
}
export interface ErrorMessage {
  message: string;
}

export interface Params<T> {
  params?: T;
}

// common get response
export interface GetResponse {
  currentPageNumber: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  statusCode: number;
  message: string;
}

// common response
export interface CommonResponse {
  success: string;
  status: number;
}

// others options for request
export interface CommonOthers {
  reRender: (val: boolean) => void;
  toastMessage: (type: IconType, msg: string) => void;
}
