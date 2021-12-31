import { isInDarkMode } from "api/state-slices/ui/selectors";
import { useSelector } from "react-redux";

export const updatePageTitle = (CONFIG: Config) => {
  const actualPath = window.location.pathname;

  const title =
    Object.keys(CONFIG.ROUTER.PAGES).find(
      (page) =>
        CONFIG.ROUTER.PAGES[page].path === actualPath ||
        CONFIG.ROUTER.PAGES[page].path ===
          actualPath.substring(0, actualPath.length - 1) ||
        CONFIG.ROUTER.PAGES[page].path === `${actualPath}/`
    ) || CONFIG.APP_NAME;

  window.document.title = `${CONFIG.APP_NAME} - ${title}`;
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
