import "./styles.css";

import React from "react";

import { InputComponent } from "./types";

import { buildBoxComponent } from "../../../utils";

/**
 * A flexible text input element
 *
 * @since 1.0.0
 *
 * @param {string} value text input value
 * @param {(newValue:string)=>void} onChange callback triggered when numeric input changes
 * @param {string} label `common modular-ui prop` - component top label
 * @param {string} className `common modular-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common modular-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common modular-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common modular-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common modular-ui prop` - Hide/show component
 * @param {boolean} shadow `common modular-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example Input usage</caption>
 * import { render } from "react-dom";
 * import { Input } from '@cianciarusocataldo/modular-ui';
 *
 * render(<Input value="example text" />, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/atoms/Input
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso*/
const Input: InputComponent = ({
  onChange = () => {},
  value,
  placeholder,
  readOnly,
  label,
  ...commonProps
}) =>
  buildBoxComponent({
    callBack: (value, setValue) => ({
      name: "modular-inputbox",
      Component: (
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          className="input-box"
          readOnly={readOnly}
          onChange={(e) => {
            if (!readOnly) {
              const newValue = e.target.value ? e.target.value : "";
              onChange(newValue);
              setValue(newValue);
            }
          }}
        />
      ),
      commonProps,
    }),
    defaultValue: value || "",
    value,
    label,
  });

export default Input;
