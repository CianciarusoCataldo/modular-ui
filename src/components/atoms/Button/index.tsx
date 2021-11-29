import "./styles.css";

import React from "react";
import classNames from "classnames";

import { ButtonProps } from "./types";
import { wrapComponent } from "../../molecules/Wrapper";

/**
 * A flexible button, easy to customize, designed for a lot of scenarios
 *
 * @param disabled enable or disable the button functionalities (UI will reflect it too)
 * @param children button content
 * @param onClick callback triggered when the button is clicked
 * @param noStyles If true, no other styles will be applied on main container (useful for image only buttons)
 * @param id button data-id, applied on the internal button component (useful for testing and integrations)
 *
 * @copyright 2021 Cataldo Cianciaruso
 *
 */
const Button = ({
  disabled = false,
  children,
  onClick,
  className: parentClassName,
  noStyles,
  id,
  hide,
  ...props
}: ButtonProps) => {
  const buttonClassName = classNames("styled ", {
    disabled: disabled,
    enabled: !disabled,
  });

  return wrapComponent(
    <div id="modular-button">
      <button
        {...props}
        data-id={id}
        disabled={disabled}
        onClick={onClick}
        className={classNames(parentClassName, {
          unstyled: noStyles,
          [buttonClassName]: !noStyles,
        })}
      >
        {children}
      </button>
    </div>,
    hide
  );
};

export default Button;
