import { useDispatch, useSelector } from "react-redux";
import { HOME_ICON, BurgerIcon, LogoIcon } from "assets/images";

import { Button, Header } from "modular-ui-preview";
import classNames from "classnames";

import { getAppName, getRoutesPaths } from "api/state-slices/config/selectors";
import { requestRoute } from "api/state-slices/router/actions";
import { openDrawer } from "api/state-slices/ui/actions";
import { isHomePage } from "api/state-slices/ui/selectors";

import LanguageSelector from "../LanguageSelector";
import { driveWithDarkMode } from "api/helpers/ui-helper";

const AppHeader = () => {
  const dispatch = useDispatch();
  const APP_NAME = useSelector(getAppName);
  const hideHomeButton = useSelector(isHomePage);
  const PATHS = useSelector(getRoutesPaths);
  const CustomHeader = driveWithDarkMode(Header)

  return (
    <CustomHeader>
      <div className="flex flex-row items-center mt-14 mb-5 ml-1">
        <LanguageSelector />
        <Button
          aria-label="back button"
          onClick={() => {
            dispatch(requestRoute(PATHS.HOME));
          }}
          noStyles
          className={classNames(
            "fixed top-2 overflow-auto py-0 ml-1 mr-3 outline-none",
            {
              hidden: hideHomeButton,
            }
          )}
        >
          {HOME_ICON}
        </Button>
        <Button
          aria-label="drawer button"
          onClick={() => {
            dispatch(openDrawer());
          }}
          noStyles
          className="inline-flex py-0 outline-none"
        >
          <div className="p-1 sm:p-2 md:p-2 lg:p-2 xl:p-2">{BurgerIcon}</div>
        </Button>

        <div className="m-auto flex flex-row text-white">
          <div className="m-auto mr-1 md:mr-2 lg:mr-2 xl:mr-2 2xl:mr-2 3xl:mr-2">
            {LogoIcon}
          </div>
          <div className="flex flex-col m-auto mb-3">
            <div className="m-auto hover:text-blue-400">
              <a href="https://github.com/CianciarusoCataldo/modular-ui">
                <p className="text-4xl">{APP_NAME}</p>
              </a>
              <div className="mt-2">
                <a
                  href="https://www.npmjs.com/package/@cianciarusocataldo/modular-ui"
                  style={{ height: "25px" }}
                >
                  <img
                    alt="npm"
                    src="https://img.shields.io/npm/v/@cianciarusocataldo/modular-ui?label=latest version"
                    height="25"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomHeader>
  );
};

export default AppHeader;
