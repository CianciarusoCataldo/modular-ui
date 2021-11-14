import { lazy, LazyExoticComponent } from "react";

const PAGES: Record<RouteKey, LazyExoticComponent<() => JSX.Element>> = {
  HOME: lazy(() => import("../../app/pages/HomePage")),
  FORM: lazy(() => import("../../app/pages/Form")),
  CARD: lazy(() => import("../../app/pages/Card")),
  DROPDOWN: lazy(() => import("../../app/pages/Dropdown")),
  BUTTON: lazy(() => import("../../app/pages/Button")),
  DIVIDER: lazy(() => import("../../app/pages/Divider")),
  LINK: lazy(() => import("../../app/pages/Link")),
  MODAL: lazy(() => import("../../app/pages/Modal")),
};

export const getRoutingLogic = (PATHS: Record<RouteKey, string>) =>
  Object.keys(PATHS).map((route) => ({
    component: PAGES[route as RouteKey],
    key: PATHS[route as RouteKey],
    exact: true,
    path: PATHS[route as RouteKey],
  }));

export const computeRoutePaths = (CONFIG: Config) => {
  let PATHS = { ...CONFIG.ROUTER.ROUTES_PATHS };
  Object.keys(PATHS).forEach((route) => {
    PATHS[route as RouteKey] = `${CONFIG.ROUTER.BASENAME}${
      PATHS[route as RouteKey]
    }`;
  });
  return PATHS;
};

export const computeRoutesMap = (ROUTES: Record<RouteKey, string>) => {
  const ROUTES_MAP = Object.fromEntries(
    Object.keys(ROUTES).map((route, i) => [
      ROUTES[route as RouteKey],
      route as RouteKey,
    ])
  );
  return ROUTES_MAP;
};
