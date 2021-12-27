import "./styles.css";

import React from "react";
import classNames from "classnames";

import { ButtonProps } from "./types";
import { buildComponent } from "../../../utils";

/**
 * A flexible button, easy to customize, designed for a lot of scenarios
 *
 * @param disabled enable or disable the button functionalities (UI will reflect it too)
 * @param children button content
 * @param onClick callback triggered when the button is clicked
 * @param unstyled If true, no other styles will be applied on main container (useful for image only buttons)
 *
 * @copyright 2021 Cataldo Cianciaruso
 *
 */
const Button = ({
  disabled,
  children,
  onClick,
  className: parentClassName,
  onChange,
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
