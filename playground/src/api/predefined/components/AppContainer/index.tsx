import { driveWithDarkMode } from "@cianciarusocataldo/modular-engine";

import { Container, ContainerProps } from "modular-ui-preview";

const AppContainer = (props: ContainerProps) => {
  const Component = driveWithDarkMode(Container);
  return <Component {...props} />;
};

export default AppContainer;
