import "./styles.css";
import React from "react";
import classnames from "classnames";

import { DropdownProps } from "./types";

import classNames from "classnames";
import { buildComponent } from "../../../utils";

/**
 * Show a list of elements in a dropdown menu (by default, with fade-in and out effects).
 * Can be easily customized and every element style and behaviour (with a callback) can
 * be customized too.
 *
 * @param actualValue actual selected element (as index). If not set, the placeholder will be showed at the start.
 * @param content Dropdown content elements
 * @param placeholder Dropdown default value (showed at the start if `actualValue` is not set)
 * @param className Custom classname applied on Dropdown component
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Dropdown = ({
  actualValue,
  content = [],
  placeholder = "",
  onChange,
  shadow,
  ...commonProps
}: DropdownProps) => {
  const [isVisible, setVisible] = React.useState(false);
  const [selectedValue, setValue] = React.useState<{
    name: string | JSX.Element;
    icon?: JSX.Element | Element;
  }>(
    content[actualValue] || {
      name: placeholder || "",
      icon: <div />,
    }
  );

  return buildComponent({
    name: "modular-dropdown",
    Component: [
      <button
        type="button"
        onClick={() => {
          setVisible(!isVisible);
        }}
        className={classNames("button", { shadowed: shadow })}
        id="options-menu"
        key="options-menu"
        data-id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <div key="label" className="label">
          <div className="label">{selectedValue.icon}</div>
          <div className="label">{selectedValue.name}</div>
        </div>
        <div
          key="icon"
          className={classNames("icon", {
            rotate: isVisible,
            "rotate-back": !isVisible,
          })}
        >
          <p>
            <i className="arrow-icon"></i>
          </p>
        </div>
      </button>,
      <div
        key="options"
        className={classnames("options", {
          "component-hidden": !isVisible,
          shadowed: shadow,
        })}
      >
        {content.map((item, index) => (
          <div key={`dropdown_option_${index}`} className="option">
            <button
              data-id={`dropdown_option_${index}`}
              onClick={() => {
                onChange && onChange(item.name, index);
                setValue({ ...item });
                setVisible(false);
              }}
              key={`item_${index}`}
              className={classnames("regular", {
                first: index === 0,
                last: index === content.length - 1,
              })}
            >
              {item.icon}
              <div className="label">{item.name}</div>
            </button>
          </div>
        ))}
      </div>,
    ],
    commonProps,
  });
};

export default Dropdown;
