import { Redirect, Route, Router, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppProps } from "./types";

import { getRoutesPaths } from "api/state-slices/config/selectors";

import { getRoutingLogic } from "api/helpers/route-helper";

import { Button, Drawer, Header } from "modular-ui-preview";
import { BurgerIcon, HOME_ICON, LogoIcon } from "assets/images";
import { usePageTitlesTranlslations } from "app/hooks/localization";
import { requestRoute } from "api/state-slices/router/actions";
import { closeDrawer, openDrawer } from "api/state-slices/ui/actions";
import { isDrawerOpen, isHomePage } from "api/state-slices/ui/selectors";
import classNames from "classnames";

const App = ({ history }: AppProps) => {
  const PATHS = useSelector(getRoutesPaths);
  const t = usePageTitlesTranlslations();
  const dispatch = useDispatch();
  const hideBackButton = useSelector(isHomePage);
  const isDrawerShowing = useSelector(isDrawerOpen);

  const ROUTES_PROPS = getRoutingLogic(PATHS);

  const HeaderContent = (
    <div className=" flex flex-row items-center mt-14 mb-5 ml-1">
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
      <Button
        aria-label="back button"
        onClick={() => {
          dispatch(requestRoute(PATHS.HOME));
        }}
        noStyles
        className={classNames("inline-flex py-0 ml-1 outline-none", {
          hidden: hideBackButton,
        })}
      >
        {HOME_ICON}
      </Button>
      <div className="m-auto flex flex-row text-white">
        <div className="m-auto mr-1 md:mr-2 lg:mr-2 xl:mr-2 2xl:mr-2 3xl:mr-2">
          {LogoIcon}
        </div>
        <div className="flex flex-col m-auto mb-3">
          <div className="m-auto">
            <p className="text-4xl">Modular-ui</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div id="app-container">
      <Header content={HeaderContent} />
      <Drawer
        isOpen={isDrawerShowing}
        elements={Object.keys(PATHS).map((route) => {
          return {
            text: t(route),
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
            <Redirect to={PATHS.HOME} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
