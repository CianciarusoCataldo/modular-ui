import "./styles.css";
import React from "react";

import { SpinnerComponent } from "./types";

import DEFAULT_ICONS from "./icons";

import { buildBoxComponent } from "../../../utils";

import Container from "../Container";

/**
 * A smart status indicator, with customizable imgages showed for every state (defaults are `loading`,`success` and `error`)
 *
 * @param {number} value Spinner status
 * @param {JSX.Element | Element | string} label Component label, showed at the top
 * @param {string} className `common modular-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common modular-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common modular-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common modular-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common modular-ui prop` - Hide/show component
 * @param {boolean} shadow `common modular-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 *@example <caption>Example Dropdown usage</caption>
 *import { render } from "react-dom";
 *import { Spinner } from '@cianciarusocataldo/modular-ui';
 *
 * render(<Spinner value="error" />, document.getElementById("root"));
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Spinner: SpinnerComponent = ({
  value,
  icon,
  label,
  statuses,
  ...commonProps
}) => {
  return buildBoxComponent({
    label,
    value,
    defaultValue: "loading",
    callBack: (value, setValue) => {
      const ICONS = statuses || DEFAULT_ICONS;
      const StatusIcon = () => (
        <Container unstyled animated>
          {value && ICONS[value] ? ICONS[value] : ICONS.loading}
        </Container>
      );

      return {
        commonProps,
        Component: (
          <Container unstyled animated>
            <StatusIcon />
          </Container>
        ),
        name: "modular-spinner",
      };
    },
  });
};

export default Spinner;
