import "./styles.css";
import React from "react";
import classnames from "classnames";

import { DropdownProps } from "./types";

import classNames from "classnames";
import { wrapComponent } from "../Wrapper";

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
  className: parentClassName,
  content = [],
  defaultValue = "",
  hide,
}: DropdownProps) => {
  const [isVisible, setVisible] = React.useState(false);
  return wrapComponent(
    <div id="modular-dropdown" className={parentClassName}>
      <div className="container">
        <button
          type="button"
          onClick={() => setVisible(!isVisible)}
          className="button"
          id="options-menu"
          data-id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <div className="label">{defaultValue}</div>
          <div className={classNames("icon", { "icon-visible": isVisible })}>
            <p>
              <i className="icon-img down"></i>
            </p>
          </div>
        </button>
        <div
          className={classnames({
            "options-hidden": !isVisible,
            options: isVisible,
          })}
        >
          {content.map((item, index) => (
            <div key={`dropdown_option_${index}`} className="option">
              <button
                data-id={`dropdown_option_${index}`}
                onClick={() => {
                  setVisible(false);
                  item.action();
                }}
                key={`item_${index}`}
                className={classnames("regular", {
                  last: index === content.length - 1,
                })}
              >
                <div className="box">
                  {item.icon}
                  <div className="label">{item.name}</div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>,
    hide
  );
};

export default Dropdown;
