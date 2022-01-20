import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  closeDrawer,
  driveWithDarkMode,
  getHomePage,
  geti18nConfig,
  getPages,
  isActualRoute,
  isDrawerOpen,
  requestRoute,
} from "@cianciarusocataldo/modular-engine";

import { Drawer } from "modular-ui-preview";
import { Logo } from "app/contents/drawer";

/** Custom Modular-app laguage drawer */
const AppDrawer = () => {
  const dispatch = useDispatch();
  const PATHS = useSelector(getPages);
  const I18N = useSelector(geti18nConfig);
  const isDrawerShowing = useSelector(isDrawerOpen);
  const HOME = useSelector(getHomePage);
  const { t } = useTranslation(I18N.PAGES_NAMESPACE);

  const ALL_PATHS: Record<string, string> = { ...PATHS, HOME_PAGE: HOME };

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

  const DrawerComponent = driveWithDarkMode(Drawer);

  return (
    <DrawerComponent
      logo={<Logo />}
      hide={!isDrawerShowing}
      elements={[
        ...Object.keys(ALL_PATHS)
          .sort()
          .map((route) => {
            return {
              text: t(route),
              actionCallback: () => {
                dispatch(requestRoute(ALL_PATHS[route]));
                dispatch(closeDrawer());
              },
              isActiveCallback: () => isActualRoute(ALL_PATHS[route]),
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
