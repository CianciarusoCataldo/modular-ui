import "./styles.css";

import React from "react";
import { CheckboxProps } from "./types";
import { applyWrapperMiddleware } from "../../molecules/Wrapper";
import classNames from "classnames";

/**
 * A flexible checkbox element
 *
 * @param className A custom className applied on main container
 * @param hide hide/show component
 * @param dark enable/disable dark mode
 * @param id data-id applied on main container
 * @param value Checkbox initial value (checked / unchecked)
 * @param onChange onChange callback called when Checkbox is clicked
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Checkbox = ({
  value,
  onChange = () => {},
  onClick,
  ...commonProps
}: CheckboxProps) => {
  const [isChecked, setChecked] = React.useState<boolean>(value || false);
  const onChangeCheck = () => {
    onChange(!isChecked);
    setChecked(!isChecked);
  };

  const args = {
    onClick: onChangeCheck,
  };

  return applyWrapperMiddleware(
    isChecked && (
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1171.000000 1280.000000"
        preserveAspectRatio="xMidYMid meet"
        fill="var(--svgcolor)"
      >
        <g
          transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path
            d="M11555 12694 c-1288 -888 -2591 -2076 -3945 -3594 -1475 -1656 -3026
-3783 -4315 -5918 -72 -119 -115 -180 -123 -177 -8 3 -716 474 -1575 1048
-859 574 -1568 1047 -1576 1052 -11 6 -10 2 2 -16 98 -140 3704 -5078 3709
-5079 3 0 34 66 68 148 1225 2918 2422 5234 3838 7427 1148 1777 2481 3497
3899 5028 91 97 163 177 161 177 -2 0 -67 -43 -143 -96z"
          />
        </g>
      </svg>
    ),
    "modular-checkbox",
    { ...commonProps, className: classNames(commonProps.className, "check") },
    {
      onClick: onChangeCheck,
    }
  );
};

export default Checkbox;
