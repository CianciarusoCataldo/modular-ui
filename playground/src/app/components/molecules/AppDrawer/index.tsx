import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { LogoIcon } from "assets/images";

import {
  closeDrawer,
  getAppName,
  getHomePage,
  geti18nConfig,
  getPages,
  isActualRoute,
  isDrawerOpen,
  isInDarkMode,
  requestRoute,
} from "@cianciarusocataldo/modular-engine";

import { Drawer, Link } from "modular-ui-preview";
import { useTranslation } from "react-i18next";

/** Custom Modular-app laguage drawer */
const AppDrawer = () => {
  const dispatch = useDispatch();
  const PATHS = useSelector(getPages);
  const I18N = useSelector(geti18nConfig);
  const isDrawerShowing = useSelector(isDrawerOpen);
  const darkMode = useSelector(isInDarkMode);
  const HOME = useSelector(getHomePage);
  const APP_NAME = useSelector(getAppName);
  const { t } = useTranslation(I18N.PAGES_NAMESPACE || "page-titles");

  React.useEffect(() => {
    if (isDrawerShowing) {
      let element = document.getElementById("modular-drawer");

      document.getElementById("app-container")!.onclick = function (e: Event) {
        if (element && !element.contains(e.target as Node)) {
          dispatch(closeDrawer());
        }
      };
    } else {
      document.getElementById("app-container")!.onclick = null;
    }
  }, [dispatch, isDrawerShowing]);

  return (
    <Drawer
      dark={darkMode}
      logo={
        <div className="flex flex-row">
          {LogoIcon}
          <Link
            to="https://github.com/CianciarusoCataldo/modular-ui"
            className="ml-1 text-white text-lg"
            newTab
          >
            {APP_NAME}
          </Link>
        </div>
      }
      hide={!isDrawerShowing}
      elements={[
        {
          text: t("HOME_PAGE"),
          actionCallback: () => {
            dispatch(requestRoute(HOME));
            dispatch(closeDrawer());
          },
          isActiveCallback: () => isActualRoute(HOME),
        },
        ...Object.keys(PATHS)
          .sort()
          .map((route) => {
            return {
              text: t(route),
              actionCallback: () => {
                dispatch(requestRoute(PATHS[route]));
                dispatch(closeDrawer());
              },
              isActiveCallback: () => isActualRoute(PATHS[route]),
            };
          }),
      ]}
      onClose={() => {
        dispatch(closeDrawer());
      }}
    />
  );
};

export default AppDrawer;
