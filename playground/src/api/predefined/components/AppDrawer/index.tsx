import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  closeDrawer,
  driveWithDarkMode,
  isDrawerOpen,
} from "@cianciarusocataldo/modular-engine";

import { Drawer } from "modular-ui-preview";
import { DrawerContent, DrawerElements, DrawerLogo } from "app/contents/drawer";

/** Custom Modular-app drawer */
const AppDrawer = () => {
  const dispatch = useDispatch();
  const isDrawerShowing = useSelector(isDrawerOpen);

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
      logo={<DrawerLogo />}
      hide={!isDrawerShowing}
      onClose={() => {
        dispatch(closeDrawer());
      }}
      elements={DrawerElements}
    >
      <DrawerContent />
    </DrawerComponent>
  );
};

export default AppDrawer;
