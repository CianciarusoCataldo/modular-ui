import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { LogoIcon } from "assets/images";

import { requestRoute } from "api/core/store/internal-slices/router/actions";
import { closeDrawer } from "api/core/store/internal-slices/ui/actions";
import {
  isDrawerOpen,
  isInDarkMode,
} from "api/core/store/internal-slices/ui/selectors";
import {
  getAppName,
  getPages,
} from "api/core/store/internal-slices/config/selectors";

import { Drawer, Link } from "modular-ui-preview";

/** Custom Modular-app laguage drawer */
const AppDrawer = () => {
  const dispatch = useDispatch();
  const PATHS = useSelector(getPages);
  const isDrawerShowing = useSelector(isDrawerOpen);
  const darkMode = useSelector(isInDarkMode);
  const APP_NAME = useSelector(getAppName);

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
      elements={Object.keys(PATHS)
        .sort()
        .map((route) => {
          return {
            text: route,
            actionCallback: () => {
              dispatch(requestRoute(PATHS[route]));
              dispatch(closeDrawer());
            },
            isActiveCallback: () =>
              window.location.pathname === PATHS[route] ||
              window.location.pathname.substring(
                0,
                window.location.pathname.length - 1
              ) === PATHS[route] ||
              `${window.location.pathname}/` === PATHS[route],
          };
        })}
      onClose={() => {
        dispatch(closeDrawer());
      }}
    />
  );
};

export default AppDrawer;
