import i18n from "api/core/i18n/instance";
import { isInDarkMode } from "api/state-slices/ui/selectors";
import { useSelector } from "react-redux";

export const updatePageTitle = (
  ROUTES_MAP: Record<string, RouteKey>,
  fallback: string
) => {
  const route =
    ROUTES_MAP[window.location.pathname] ||
    ROUTES_MAP[
      window.location.pathname.substring(0, window.location.pathname.length - 1)
    ] ||
    ROUTES_MAP[`${window.location.pathname}/`];

  const title =
    route && i18n.isInitialized && route !== "HOME"
      ? `Modular-ui - ${route}`
      : fallback;
  window.document.title = title;
};

export const isActualRouteHomepage = (homePath: string) => {
  return (
    `${window.location.pathname}/` === homePath ||
    window.location.pathname.substring(
      0,
      window.location.pathname.length - 1
    ) === homePath ||
    window.location.pathname === homePath
  );
};

export const driveWithDarkMode =
  (Component: (props: any) => JSX.Element) => (props: any) => {
    const darkMode = useSelector(isInDarkMode);

    return <Component {...props} dark={darkMode} />;
  };
