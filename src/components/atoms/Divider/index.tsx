import "./styles.css";

import { DividerProps } from "./types";

import { buildComponent } from "../../../utils";

/**
 * A simple divider, useful to separate sections and paragraphs
 *
 * @param {string} className `common modular-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common modular-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common modular-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common modular-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common modular-ui prop` - Hide/show component
 * @param {boolean} shadow `common modular-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 *@example <caption>Example Divider usage</caption>
 *import { render } from "react-dom";
 *import { Divider } from '@cianciarusocataldo/modular-ui';
 *
 * render(<Divider />, document.getElementById("root"));
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Divider = (props: DividerProps) =>
  buildComponent({
    name: "modular-divider",
    commonProps: props,
  });

export default Divider;
