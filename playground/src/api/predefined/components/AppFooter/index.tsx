import classNames from "classnames";

import { driveWithDarkMode } from "@cianciarusocataldo/modular-engine";

import AppFooterContent from "app/contents/footer";
import AppContainer from "../AppContainer";

const Footer = ({
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
        wrapper="footer"
        className={classNames(
          "fixed overflow-hidden h-24 bottom-0 w-full border-t-2",
          className
        )}
        style={{
          borderColor,
          zIndex: "8",
          height: height || "0px",
        }}
      >
        <AppFooterContent />
      </AppContainer>
      <div
        className={classNames(className)}
        style={{ height: height || "0px" }}
      />
    </div>
  );
};

const AppFooter = ({
  className,
  height,
  disabled,
}: {
  className?: string;
  height?: string;
  disabled?: boolean;
}) => {
  const Component = driveWithDarkMode(Footer);
  return disabled ? (
    <div />
  ) : (
    <Component className={className} height={height} />
  );
};

export default AppFooter;
