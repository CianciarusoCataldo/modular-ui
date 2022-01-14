import { Page } from "modular-ui-preview";
import { useSelector } from "react-redux";
import { isInDarkMode } from "@cianciarusocataldo/modular-engine";

/** Custom Modular-app page */
const AppPage = ({
  children,
}: {
  children: JSX.Element | Element | string | (JSX.Element | Element | string)[];
}) => {
  const dark = useSelector(isInDarkMode);
  return <Page dark={dark}>{children}</Page>;
};

export default AppPage;
