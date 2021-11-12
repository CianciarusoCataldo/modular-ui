import "./styles.css";
import classNames from "classnames";
import { PageProps } from "./types";

const Page = ({ children, orientation = "vertical" }: PageProps) => {
  return (
    <div className={classNames(orientation, "modular-page")}>{children}</div>
  );
};

export default Page;
