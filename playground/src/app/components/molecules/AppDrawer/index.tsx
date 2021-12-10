import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Drawer, Link } from "modular-ui-preview";

import { LogoIcon } from "assets/images";

import { requestRoute } from "api/state-slices/router/actions";
import { closeDrawer } from "api/state-slices/ui/actions";
import { isDrawerOpen, isInDarkMode } from "api/state-slices/ui/selectors";
import { getRoutesPaths } from "api/state-slices/config/selectors";

const AppDrawer = () => {
  const dispatch = useDispatch();
  const PATHS = useSelector(getRoutesPaths);
  const isDrawerShowing = useSelector(isDrawerOpen);
  const darkMode = useSelector(isInDarkMode);

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
          >
            Modular-ui
          </Link>
        </div>
      }
      hide={!isDrawerShowing}
      elements={Object.keys(PATHS)
        .slice(1)
        .map((route) => {
          return {
            text: route,
            actionCallback: () => {
              dispatch(requestRoute(PATHS[route as RouteKey]));
              dispatch(closeDrawer());
            },
            isActiveCallback: () =>
              window.location.pathname === PATHS[route as RouteKey] ||
              window.location.pathname.substring(
                0,
                window.location.pathname.length - 1
              ) === PATHS[route as RouteKey] ||
              `${window.location.pathname}/` === PATHS[route as RouteKey],
          };
        })}
      onClose={() => {
        dispatch(closeDrawer());
      }}
    />
  );
};

export default AppDrawer;
