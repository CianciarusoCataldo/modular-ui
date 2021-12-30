import "./styles.css";

import React from "react";

import { InputProps } from "./types";
import { buildBoxComponent } from "../../../utils";

/**
 * A flexible text input element
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Input = ({
  onChange = () => {},
  value,
  placeholder,
  readOnly,
  label,
  ...commonProps
}: InputProps) =>
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
            if (e.target.value) {
              {
                onChange(e.target.value);
                setValue(e.target.value);
              }
            } else {
              onChange("");
              setValue("");
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
