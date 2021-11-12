import "./styles.css";
import classNames from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import { ButtonProps } from "./types";

/**
 * @param noStyles If true, no other styles will be applied on main container (useful for image only buttons)
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
