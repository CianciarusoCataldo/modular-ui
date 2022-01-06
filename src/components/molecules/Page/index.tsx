import "./styles.css";
import { PageProps } from "./types";

import classNames from "classnames";
import { buildComponent } from "../../../utils";

/**
 * A standard Page component. It is showed with a standard fade-in effect, along with its content.
 * Children components orientation (if an array is given as children) can be horizontal or vertical (through `orientation` parameter)
 *
 * @param children content element(s)
 * @param orientation Page children elements orientation (vertical or `horizontal)
 * @param {string} className `common modular-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common modular-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common modular-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common modular-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common modular-ui prop` - Hide/show component
 * @param {boolean} shadow `common modular-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 *@example <caption>Example Page usage</caption>
 *import { render } from "react-dom";
 *import { Page } from '@cianciarusocataldo/modular-ui';
 *
 * render(<Page><div>Example page</div></Page>, document.getElementById("root"));
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */

const Page = ({
  children,
  orientation = "vertical",
  ...commonProps
}: PageProps) => {
  return buildComponent({
    name: "modular-page",
    Component: children,
    commonProps: {
      ...commonProps,
      className: classNames(commonProps.className, orientation),
    },
  });
};

export default Page;
