import {
  driveWithDarkMode,
  getAppName,
} from "@cianciarusocataldo/modular-engine";
import { Link } from "modular-ui-preview";
import { LogoIcon } from "assets/images";
import { useSelector } from "react-redux";

export const Logo = () => {
  const APP_NAME = useSelector(getAppName);
  const LinkComponent = driveWithDarkMode(Link);

  return (
    <div className="flex flex-row">
      {LogoIcon}
      <LinkComponent
        to="https://github.com/CianciarusoCataldo/modular-ui"
        className="ml-1 text-lg"
        newTab
      >
        {APP_NAME}
      </LinkComponent>
    </div>
  );
};
