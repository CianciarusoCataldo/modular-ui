import React from "react";

import { Redirect, Route, Router, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { History } from "history";

import { getRoutesPaths } from "api/state-slices/config/selectors";

import { getRoutingLogic } from "api/helpers/route-helper";

import { Button, Drawer, Dropdown, Header, Link } from "modular-ui-preview";
import {
  BurgerIcon,
  HOME_ICON,
  LANGUAGES_ICONS,
  LogoIcon,
} from "assets/images";
import { requestRoute } from "api/state-slices/router/actions";
import {
  changeLanguage,
  closeDrawer,
  openDrawer,
} from "api/state-slices/ui/actions";
import {
  getLanguage,
  isDrawerOpen,
  isHomePage,
} from "api/state-slices/ui/selectors";

interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => {
  const PATHS = useSelector(getRoutesPaths);
  const dispatch = useDispatch();
  const hideHomeButton = useSelector(isHomePage);
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
  const ROUTES_PROPS = getRoutingLogic(PATHS);

  const LanguageSelector = () => {
    const dispatch = useDispatch();
    const language = useSelector(getLanguage);

    return (
      <div style={{ zIndex: 999 }} className="fixed right-2 top-0 bg-gray-700">
        <Dropdown
          dark={false}
          defaultValue={
            <div className="flex flex-row text-lg">
              {LANGUAGES_ICONS[language]}
              <div className="ml-1">{language}</div>
            </div>
          }
          content={Object.keys(LANGUAGES_ICONS).map((lang) => ({
            name: lang,
            action: () => dispatch(changeLanguage(lang as SupportedLanguage)),
            icon: LANGUAGES_ICONS[lang as SupportedLanguage],
          }))}
        />
      </div>
    );
  };

  const HeaderContent = (
    <div className=" flex flex-row items-center mt-14 mb-5 ml-1">
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
              <p className="text-4xl">Modular-ui</p>
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
  );

  return (
    <div id="app-container">
      <Header dark>{HeaderContent}</Header>
      <Drawer
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
      <div style={{ marginTop: "10rem" }}>
        <Router history={history}>
          <Switch>
            {ROUTES_PROPS.map((route) => (
              <Route {...route} />
            ))}
            <Redirect to={"/"} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
