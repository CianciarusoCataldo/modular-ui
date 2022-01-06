import "./styles.css";

import React from "react";

import { CheckboxProps } from "./types";

import { buildBoxComponent } from "../../../utils";

/**
 * A checkbox element, totally customizable. The tick icon can be a custom image or Element (using `icon` prop).
 *
 * @param {boolean} value Checkbox initial value (checked / unchecked)
 * @param {(newValue: boolean) => void} onChange onChange callback called when Checkbox is clicked
 * @param {JSX.Element | Element} icon custom tick icon (if not set, the default one will be used)
 * @param {string} label `common modular-ui prop` - component top label
 * @param {string} className `common modular-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common modular-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common modular-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common modular-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common modular-ui prop` - Hide/show component
 * @param {boolean} shadow `common modular-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 *@example <caption>Example CheckBox usage</caption>
 *import { render } from "react-dom";
 *import { CheckBox } from '@cianciarusocataldo/modular-ui';
 *
 * render(<CheckBox value={true} />, document.getElementById("root"));
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Checkbox = ({
  value,
  onChange,
  label,
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
          setValue(!actualValue);
        },
      },
    }),
    value,
    defaultValue: false,
    label,
  });

export default Checkbox;
