import { NavigateFunction } from "react-router-dom";
import { GetResponse, InitialState } from "./common";

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginInitialState<T, TAllData> extends InitialState {
  login: T;
  admins: {
    data: TAllData[] | null;
    total: number;
  };
}

export interface AuthUser {
  name: string;
  email: string;
  role?: string | null;
  profilePicture?: string | null;
  token?: string | null;
}

export interface ILoginOthers {
  redirect: NavigateFunction;
  redirectUrl: string;
}

export interface IAction {
  payload: {
    message?: string;
  };
}

export interface AdminGETParams {
  page: number;
  limit: number;
  nameOrEmail: string;
}

export interface AdminData {
  email: string;
  fullName: string;
  profilePicture: string | null;
  role: string | null;
  status: string | null;
}

export interface AdminDataWithKey extends AdminData {
  key: string;
}

// admin data response
export interface AdminResponse extends GetResponse {
  admins: AdminData[];
}

export interface CreateAdminData {
  email: string;
  name: string;
  password: string;
  profilePicture?: string;
}
