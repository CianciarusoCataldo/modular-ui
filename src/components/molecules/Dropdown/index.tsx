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
 * @param content Dropdown content elements
 * @param defaultValue Dropdown default value
 * @param className Custom classname applied on Dropdown component
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Dropdown = ({
  content = [],
  defaultValue = "",
  onChange,
  ...commonProps
}: DropdownProps) => {
  const [isVisible, setVisible] = React.useState(false);
  const [firstClicked, setFirstClick] = React.useState(false);
  /* istanbul ignore next */
  React.useEffect(() => {
    window.document.addEventListener("scroll", () => {
      if (isVisible) {
        setVisible(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (isVisible) {
          setVisible(false);
        }
      });
    };
  });
  return buildComponent({
    name: "modular-dropdown",
    Component: [
      <button
        type="button"
        onClick={() => {
          setFirstClick(true);
          setVisible(!isVisible);
        }}
        className="button"
        id="options-menu"
        key="options-menu"
        data-id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <div key="label" className="label">
          {defaultValue}
        </div>
        <div
          key="icon"
          className={classNames("icon", {
            rotate: isVisible,
            "rotate-back": !isVisible && firstClicked,
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
          hidden: !isVisible,
        })}
      >
        {content.map((item, index) => (
          <div key={`dropdown_option_${index}`} className="option">
            <button
              data-id={`dropdown_option_${index}`}
              onClick={() => {
                onChange(item.name, index);
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
