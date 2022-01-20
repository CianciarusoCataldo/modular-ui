import { lazy } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { History } from "history";

import {
  driveWithDarkMode,
  getHomePage,
  getPages,
  isInDarkMode,
} from "@cianciarusocataldo/modular-engine";

import AppHeaderContent from "./contents/header";
import AppFooterContent from "./contents/footer";

import AppDrawer from "./components/molecules/AppDrawer";
import AppModal from "./components/molecules/AppModal";
import { Container } from "modular-ui-preview";
import LanguageSelector from "./components/molecules/LanguageSelector";
import DarkModeSwitcher from "./components/molecules/DarkModeSwitcher";

/** Modular-app main component */
const App = ({ history }: { history: History }) => {
  const PAGES = useSelector(getPages);
  const HOME = useSelector(getHomePage);
  const dark = useSelector(isInDarkMode);
  const ALL_PAGES: Record<string, string> = {
    ...PAGES,
    HOME_PAGE: HOME,
  };
  const borderColor = dark === true ? "#eaebec" : "#1d232e";
  const AppContainer = driveWithDarkMode(Container);

  return (
    <div id="app-container">
      <AppModal />
      <AppDrawer />
      <div
        className="fixed top-0 right-1 flex flex-row"
        style={{ zIndex: "9" }}
      >
        <LanguageSelector />
        <DarkModeSwitcher />
      </div>
      <AppContainer
        wrapper="header"
        className="fixed overflow-hidden h-44 top-0 w-full border-b-2"
        style={{
          borderColor,
          zIndex: "8",
        }}
      >
        <AppHeaderContent />
      </AppContainer>
      <AppContainer
        wrapper="footer"
        className="fixed overflow-hidden h-24 bottom-0 w-full border-t-2"
        style={{
          borderColor,
          zIndex: "8",
        }}
      >
        <AppFooterContent />
      </AppContainer>
      <div className="h-44" />
      <AppContainer unstyled className="overflow-auto">
        <Router history={history}>
          <Switch>
            {Object.keys(ALL_PAGES).map((route) => (
              <Route
                component={lazy(() => import(`./pages/${route}`))}
                key={route}
                exact
                path={PAGES[route]}
              />
            ))}
            <Redirect to={HOME} />
          </Switch>
        </Router>
      </AppContainer>
      <div className="h-24" />
    </div>
  );
};

export default App;
