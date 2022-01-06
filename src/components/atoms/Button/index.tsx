import "./styles.css";

import React from "react";
import classNames from "classnames";

import { ButtonProps } from "./types";

import { buildComponent } from "../../../utils";

/**
 * A button component, designed for a lot of scenarios. Can be used as is, or as a clickable image
 * (through `unstyled` prop that removes all its standard styles).
 *
 * @param {boolean} disabled enable or disable the button functionalities (UI will reflect it too)
 * @param children button content
 * @param {()=>void} onClick callback triggered when the button is clicked
 * @param {()=>void} onMouseEnter callback triggered when the cursor enter the component
 * @param {()=>void} onMouseLeave callback triggered when the cursor exit the component
 * @param {string} className `common modular-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common modular-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common modular-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common modular-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common modular-ui prop` - Hide/show component
 * @param {boolean} shadow `common modular-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 *@example <caption>Example Button usage</caption>
 *import { render } from "react-dom";
 *import { Button } from '@cianciarusocataldo/modular-ui';
 *
 * render(<Button onClick={()=>alert("Click !")}>
 *            Example button
 *        </Button>, document.getElementById("root"));
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Button = ({
  disabled,
  children,
  onClick,
  className: parentClassName,
  onMouseEnter,
  onMouseLeave,
  ...commonProps
}: ButtonProps) =>
  buildComponent({
    name: "modular-button",
    Component: (
      <button
        data-id={commonProps.id}
        disabled={disabled}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={classNames(parentClassName, {
          disabled: disabled,
          enabled: !disabled,
        })}
      >
        {children}
      </button>
    ),
    commonProps,
  });

export default Button;
