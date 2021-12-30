import "./styles.css";

import React from "react";

import { CounterProps } from "./types";
import { buildBoxComponent } from "../../../utils";

/**
 * A flexible numeric input element
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Counter = ({
  onChange,
  value,
  placeholder,
  readOnly,
  label,
  icon,
  ...commonProps
}: CounterProps) =>
  buildBoxComponent<number>({
    callBack: (value, setValue) => ({
      name: "modular-counterbox",
      Component: (
        <input
          type="number"
          value={value}
          placeholder={placeholder}
          className="input-box"
          readOnly={readOnly}
          onChange={(e) => {
            if (e.target.value) {
              const changedValue = Number.parseInt(e.target.value);
              onChange && onChange(changedValue);
              setValue(changedValue);
            } else {
              onChange && onChange(0);
              setValue(0);
            }
          }}
        />
      ),
      commonProps,
    }),
    defaultValue: value || 0,
    value,
    label,
  });

export default Counter;
