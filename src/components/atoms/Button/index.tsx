import "./styles.css";

import React from "react";
import classNames from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import { ButtonProps } from "./types";

/**
 * A flexible button, easy to customize, designed for a lot of scenarios
 *
 * @param disabled enable or disable the button functionalities (UI will reflect it too)
 * @param children button content
 * @param onClick callback triggered when the button is clicked
 * @param className classname applied on the main container
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
  ...props
}: ButtonProps &
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) => {
  const buttonClassName = classNames("styled ", {
    disabled: disabled,
    enabled: !disabled,
  });

  return (
    <div id="modular-button">
      <button
        data-id={id}
        disabled={disabled}
        onClick={!disabled ? onClick : () => {}}
        className={classNames(parentClassName, {
          unstyled: noStyles,
          [buttonClassName]: !noStyles,
        })}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
