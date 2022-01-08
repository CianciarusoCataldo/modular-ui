import { Config } from "api/core/store/internal-slices/config/types";

import i18n from "api/core/i18n/instance";
import { isInDarkMode } from "api//core/store/internal-slices/ui/selectors";
import { useSelector } from "react-redux";

/** Update app page title (displayed on browser tab) depending on actual route */
export const updatePageTitle = (CONFIG: Config) => {
  const actualPath = window.location.pathname;

  let title =
    Object.keys(CONFIG.ROUTER.PAGES).find((page) => {
      const pageRoute = `${CONFIG.ROUTER.BASENAME}${CONFIG.ROUTER.PAGES[page]}`;

      return (
        pageRoute === actualPath ||
        pageRoute === actualPath.substring(0, actualPath.length - 1) ||
        pageRoute === `${actualPath}/`
      );
    }) || null;

  if (!title) {
    const homePageRoute = `${CONFIG.ROUTER.BASENAME}${CONFIG.ROUTER.HOME_PAGE}`;
    if (
      homePageRoute === actualPath ||
      homePageRoute === actualPath.substring(0, actualPath.length - 1) ||
      homePageRoute === `${actualPath}/`
    ) {
      title = "HOME_PAGE";
    }
  }
  window.document.title = `${CONFIG.APP_NAME} - ${
    title &&
    i18n.isInitialized &&
    i18n.t(title, {
      ns: CONFIG.I18N.PAGES_NAMESPACE || "page-titles",
    })
  }`;
};

/**
 * Check if actual route is HOME_PAGE route (from app.config.json)
 *
 * @param homePath HOME_PAGE path
 *
 * @returns true if actual route is HOME_PAGE route, false otherwise
 */
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
