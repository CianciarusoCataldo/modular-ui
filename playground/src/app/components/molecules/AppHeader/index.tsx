import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { HomeIcon, BurgerIcon, LogoIcon } from "assets/images";

import {
  getAppName,
  getHomePage,
  isHomePage,
  isInDarkMode,
  openDrawer,
  requestRoute,
} from "@cianciarusocataldo/modular-engine";

import { Button, Header, Link } from "modular-ui-preview";
import LanguageSelector from "../LanguageSelector";

/** Custom Modular-app header */
const AppHeader = () => {
  const dispatch = useDispatch();
  const APP_NAME = useSelector(getAppName);
  const hideHomeButton = useSelector(isHomePage);
  const HOME = useSelector(getHomePage);
  const dark = useSelector(isInDarkMode);

  return (
    <Header dark={dark}>
      <div className="flex flex-row items-center mt-14 mb-5 ml-1">
        <LanguageSelector />
        <Button
          aria-label="back button"
          onClick={() => {
            dispatch(requestRoute(HOME));
          }}
          unstyled
          className={classNames(
            "fixed top-2 overflow-auto py-0 ml-1 mr-3 outline-none",
            {
              hidden: hideHomeButton,
            }
          )}
        >
          {HomeIcon}
        </Button>
        <Button
          aria-label="drawer button"
          onClick={() => {
            dispatch(openDrawer());
          }}
          unstyled
          className="inline-flex py-0 outline-none"
        >
          <div className="p-1 sm:p-2 md:p-2 lg:p-2 xl:p-2">{BurgerIcon}</div>
        </Button>

        <div className="m-auto flex flex-row text-white">
          <div className="m-auto mr-1 md:mr-2 lg:mr-2 xl:mr-2 2xl:mr-2 3xl:mr-2">
            {LogoIcon}
          </div>
          <div className="flex flex-col m-auto mb-3">
            <div className="m-auto">
              <Link
                newTab
                unstyled
                to="https://github.com/CianciarusoCataldo/modular-ui"
              >
                <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl 3xl:text-4xl 4xl:text-4xl">
                  {APP_NAME}
                </p>
              </Link>
              <div className="mt-2">
                <a
                  href="https://github.com/CianciarusoCataldo/modular-ui"
                  style={{ height: "25px" }}
                >
                  <img
                    alt=""
                    src="https://img.shields.io/github/package-json/v/cianciarusocataldo/modular-ui?label=latest%20version"
                    height="25"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
