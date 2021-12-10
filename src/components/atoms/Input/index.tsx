import "./styles.css";

import React from "react";

import { InputProps } from "./types";
import { buildComponent } from "../../../utils";

/**
 * A flexible input element, can handle both text and numeric input (its UI changes based on input type)
 *
 * @param numeric if set to true, will accept only numeric values
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Input = ({
  onChange = () => {},
  numeric,
  value,
  onClick,
  placeholder,
  readOnly,
  ...commonProps
}: InputProps) => {
  /* istanbul ignore next */
  const defaultNumberValue =
    numeric && value && typeof value === "number" ? value : 0;

  /* istanbul ignore next */
  const defaultStringValue =
    !numeric && value && typeof value === "string" ? value : "";

  const [textValue, setTextValue] = React.useState<string>(defaultStringValue);
  const [numberValue, setNumberValue] =
    React.useState<number>(defaultNumberValue);

  return buildComponent({
    name: "modular-input",
    Component: (
      <input
        type={numeric ? "number" : "text"}
        value={numeric ? numberValue : textValue}
        placeholder={placeholder}
        className="input-box"
        readOnly={readOnly}
        onChange={(e) => {
          if (numeric) {
            onChange(Number.parseInt(e.target.value));
            setNumberValue(Number.parseInt(e.target.value));
          } else {
            onChange(e.target.value);
            setTextValue(e.target.value);
          }
        }}
      />
    ),
    commonProps,
  });
};

export default Input;
