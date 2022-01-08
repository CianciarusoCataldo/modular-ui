import { Config } from "api/core/store/internal-slices/config/types";

import i18n from "api/core/i18n/instance";
import { isInDarkMode } from "api//core/store/internal-slices/ui/selectors";
import { useSelector } from "react-redux";
import { isActualRoute } from "./route-helper";

/** Update app page title (displayed on browser tab) depending on actual route */
export const updatePageTitle = (CONFIG: Config) => {
  let title =
    Object.keys(CONFIG.ROUTER.PAGES).find((page) => {
      return isActualRoute(
        `${CONFIG.ROUTER.BASENAME}${CONFIG.ROUTER.PAGES[page]}`
      );
    }) || null;

  if (
    !title &&
    isActualRoute(`${CONFIG.ROUTER.BASENAME}${CONFIG.ROUTER.HOME_PAGE}`)
  ) {
    title = "HOME_PAGE";
  }
  window.document.title = `${CONFIG.APP_NAME} - ${
    title &&
    i18n.isInitialized &&
    i18n.t(title, {
      ns: CONFIG.I18N.PAGES_NAMESPACE || "page-titles",
    })
  }`;
};

export const driveWithDarkMode =
  (Component: (props: any) => JSX.Element) => (props: any) => {
    const darkMode = useSelector(isInDarkMode);

    return <Component {...props} dark={darkMode} />;
  };
