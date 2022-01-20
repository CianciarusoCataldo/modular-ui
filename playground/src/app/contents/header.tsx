import { useDispatch, useSelector } from "react-redux";

import { BurgerIcon, LeftArrowIcon, LogoIcon } from "assets/images";

import {
  getAppName,
  getHomePage,
  isHomePage,
  isInDarkMode,
  openDrawer,
  requestRoute,
} from "@cianciarusocataldo/modular-engine";

import { Button, Link } from "modular-ui-preview";

const HeaderContent = () => {
  const dispatch = useDispatch();
  const APP_NAME = useSelector(getAppName);
  const hideHomeButton = useSelector(isHomePage);
  const HOME = useSelector(getHomePage);
  const dark = useSelector(isInDarkMode);

  return (
    <div className="flex flex-row items-center mt-14 mb-5 ml-1">
      <Button
        aria-label="drawer button"
        onClick={() => {
          dispatch(openDrawer());
        }}
        unstyled
        className="inline-flex outline-none"
      >
        <div className="p-1 sm:p-2 md:p-2 lg:p-2 xl:p-2">{BurgerIcon}</div>
      </Button>
      <Button
        aria-label="back button"
        onClick={() => {
          dispatch(requestRoute(HOME));
        }}
        unstyled
        className="overflow-auto ml-1 outline-none"
        hide={hideHomeButton}
      >
        {LeftArrowIcon}
      </Button>
      <div className="m-auto flex flex-row">
        <div className="m-auto mr-1 md:mr-2 lg:mr-2 xl:mr-2 2xl:mr-2 3xl:mr-2">
          {LogoIcon}
        </div>
        <div className="flex flex-col">
          <Link
            newTab
            dark={dark}
            to="https://github.com/CianciarusoCataldo/modular-ui"
            className="m-auto"
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl 3xl:text-4xl 4xl:text-4xl">
              {APP_NAME}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
