import { lazy } from "react";
import { History } from "history";

import { useSelector } from "react-redux";

import { getHomePage, getPages } from "@cianciarusocataldo/modular-engine";

import { Redirect, Route, Router, Switch } from "react-router-dom";
import AppContainer from "../AppContainer";

const AppRouter = ({ history }: { history: History }) => {
  const PAGES = useSelector(getPages);
  const HOME = useSelector(getHomePage);
  const ALL_PAGES: Record<string, string> = {
    ...PAGES,
    HOME_PAGE: HOME,
  };
  return (
    <AppContainer unstyled className="overflow-auto">
      <Router history={history}>
        <Switch>
          {Object.keys(ALL_PAGES).map((route) => (
            <Route
              component={lazy(() => import(`../../../../app/pages/${route}`))}
              key={route}
              exact
              path={PAGES[route]}
            />
          ))}
          <Redirect to={HOME} />
        </Switch>
      </Router>
    </AppContainer>
  );
};

export default AppRouter;
