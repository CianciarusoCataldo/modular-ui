import { History } from "history";

import {
  AppDrawer,
  AppHeader,
  AppFooter,
  AppModal,
  AppRouter,
} from "api/predefined/components";

/** Modular-app main component */
const App = ({ history }: { history: History }) => {
  return (
    <div id="app-container">
      <AppModal />
      <AppDrawer />
      <AppHeader height="20vh" />
      <AppRouter history={history} />
      <AppFooter height="10vh" />
    </div>
  );
};

export default App;
