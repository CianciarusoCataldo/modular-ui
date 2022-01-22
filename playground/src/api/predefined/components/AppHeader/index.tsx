import classNames from "classnames";

import { driveWithDarkMode } from "@cianciarusocataldo/modular-engine";

import AppContainer from "../AppContainer";
import AppHeaderContent from "app/contents/header";
import { DarkModeSwitcher, LanguageSelector } from "..";

const Header = ({
  className,
  height,
  dark,
}: {
  className?: string;
  height?: string;
  dark?: boolean;
}) => {
  const borderColor = dark === true ? "#eaebec" : "#2f3a4d";

  return (
    <div>
      <AppContainer
        wrapper="header"
        className={classNames(
          "fixed overflow-hidden top-0 w-full border-b-2",
          className
        )}
        style={{
          borderColor,
          zIndex: "8",
          height: height || "0px",
        }}
      >
        <div className="flex flex-col">
          <div className="flex flex-col items-end">
            <div className="flex flex-row">
              <LanguageSelector />
              <DarkModeSwitcher />
            </div>
          </div>
          <AppHeaderContent />
        </div>
      </AppContainer>

      <div
        className={classNames(className)}
        style={{ height: height || "0px" }}
      />
    </div>
  );
};

const AppHeader = ({
  className,
  height,
  disabled,
}: {
  className?: string;
  height?: string;
  disabled?: boolean;
}) => {
  const Component = driveWithDarkMode(Header);
  return disabled ? (
    <div />
  ) : (
    <Component className={className} height={height} />
  );
};

export default AppHeader;
