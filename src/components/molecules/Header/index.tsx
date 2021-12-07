import "./styles.css";

import { HeaderProps } from "./types";
import { buildComponent, Wrappers } from "../../../utils";
/**
 * A static header. Useful when a content mush be always showed on top
 * when user navigate through the app
 *
 * @param content Header wrapped content
 * @param className a custom className applied on Header main container
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Header = ({ children, ...commonProps }: HeaderProps) => {
  return buildComponent({
    name: "modular-header",
    Component: children,
    commonProps,
    wrapper: Wrappers.HEADER,
  });
};

export default Header;
