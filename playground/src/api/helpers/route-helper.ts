import { lazy } from "react";

export const getRoutingLogic = (PATHS: Record<string, PageComponent>) =>
  Object.keys(PATHS).map((route) => ({
    component: lazy(() => import(`../../app/pages/${route}`)),
    key: route,
    exact: true,
    path: PATHS[route].path,
  }));