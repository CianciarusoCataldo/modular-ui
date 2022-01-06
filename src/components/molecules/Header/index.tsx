import "./styles.css";

import { HeaderProps } from "./types";

import { Wrappers } from "../../../utils/global";
import { buildComponent } from "../../../utils";

/**
 * A static header. Useful when a content mush be always showed on top
 * when user navigate through the app
 *
 * @param {JSX.Element | Element | string | (JSX.Element | Element | string)[]} children Header wrapped content
 * @param {string} className `common modular-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common modular-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common modular-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common modular-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common modular-ui prop` - Hide/show component
 * @param {boolean} shadow `common modular-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 *@example <caption>Example Header usage</caption>
 *import { render } from "react-dom";
 *import { Header } from '@cianciarusocataldo/modular-ui';
 *
 * render(<Header><div>Example Header</div></Header>, document.getElementById("root"));
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
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
