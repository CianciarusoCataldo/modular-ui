import "./styles.css";

import React from "react";
import { CheckboxProps } from "./types";
import { buildBoxComponent } from "../../../utils";

/**
 * A flexible checkbox element
 *
 * @param value Checkbox initial value (checked / unchecked)
 * @param onChange onChange callback called when Checkbox is clicked
 * @param onClick onChange callback called when Checkbox is clicked
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Checkbox = ({
  value,
  onChange,
  onClick,
  label,
  readOnly,
  onMouseEnter,
  onMouseLeave,
  disabled,
  icon,
  ...commonProps
}: CheckboxProps) =>
  buildBoxComponent<boolean>({
    callBack: (actualValue, setValue) => ({
      name: "modular-checkbox",
      Component: actualValue && (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1171.000000 1280.000000"
          preserveAspectRatio="xMidYMid meet"
          fill="var(--modular-link-color)"
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
      commonProps,
      additionalProps: {
        onClick: () => {
          onChange && onChange(!actualValue);
          onClick && onClick(!actualValue);
          setValue(!actualValue);
        },
      },
    }),
    value,
    defaultValue: false,
    label,
  });

export default Checkbox;
