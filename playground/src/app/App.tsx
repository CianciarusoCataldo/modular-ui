import { Redirect, Route, Router, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { History } from "history";

import { getPages } from "api/state-slices/config/selectors";

import { getRoutingLogic } from "api/helpers/route-helper";

import AppHeader from "./components/molecules/AppHeader";
import AppDrawer from "./components/molecules/AppDrawer";

interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => {
  const PATHS = useSelector(getPages);

  const ROUTES_PROPS = getRoutingLogic(PATHS);
  return (
    <div id="app-container">
      <AppHeader />
      <AppDrawer />
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
