import "./styles.css";

import React from "react";

import { InputProps } from "./types";
import { wrapComponent } from "../../molecules/Wrapper";

/**
 * A flexible input element, can handle both text and numeric inputs
 *
 * @param numeric if set to true, will accept only numeric values
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Input = ({
  className,
  hide,
  id,
  onChange = () => {},
  numeric,
  value,
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

  return wrapComponent(
    <div className={className} id="modular-input" data-id={id}>
      <input
        type={numeric ? "number" : "text"}
        value={numeric ? numberValue : textValue}
        className="box"
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
    </div>,
    hide
  );
};

export default Input;
