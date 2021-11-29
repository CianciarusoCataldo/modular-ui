import "./styles.css";

import React from "react";

import { CheckboxProps } from "./types";
import { wrapComponent } from "../../molecules/Wrapper";

/**
 * A flexible checkbox element
 *
 * @param className A custom className applied on main container
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Checkbox = ({
  className,
  hide,
  id,
  value,
  onChange = () => {},
}: CheckboxProps) => {
  const [isChecked, setChecked] = React.useState<boolean>(value || false);
  const onChangeCheck = () => {
    onChange(!isChecked);
    setChecked(!isChecked);
  };

  return wrapComponent(
    <div className={className} id="modular-checkbox" data-id={id}>
      <input
        type="checkbox"
        checked={isChecked}
        className="box"
        onChange={onChangeCheck}
      />
    </div>,
    hide
  );
};

export default Checkbox;
