import { lazy } from "react";
import { RouteType } from "../types";
const Home = lazy(() => import("../pages/Home"));

// public routers
export const publicRouters: RouteType[] = [
  {
    path: "",
    element: Home,
  },
  {
    path: "404",
    element: Home,
  },
  {
    path: "*",
    element: Home,
  },
];
