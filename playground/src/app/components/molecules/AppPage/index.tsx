import { Container } from "modular-ui-preview";
import { driveWithDarkMode } from "@cianciarusocataldo/modular-engine";

/** Custom Modular-app page */
const AppPage = ({
  children,
}: {
  children: JSX.Element | Element | string | (JSX.Element | Element | string)[];
}) => {
  const AppContainer = driveWithDarkMode(Container);
  return (
    <AppContainer animated unstyled className="m-2">
      {children}
    </AppContainer>
  );
};

export default AppPage;
