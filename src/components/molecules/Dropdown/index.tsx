import "./styles.css";
import React from "react";
import classnames from "classnames";

import { DropdownProps } from "./types";

import classNames from "classnames";

/**
 * Show a list of elements in a dropdown menu (by default, with fade-in and out effects).
 * Can be easily customized and every element style and behaviour (with a callback) can
 * be customized too.
 *
 * @param param0
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Dropdown = ({
  className: parentClassName,
  content = [],
  defaultValue = "",
}: DropdownProps) => {
  const [isVisible, setVisible] = React.useState(false);
  return (
    <div id="modular-dropdown" className={parentClassName}>
      <div className="container">
        <button
          type="button"
          onClick={() => setVisible(!isVisible)}
          className="button"
          id="options-menu"
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
    </div>
  );
};

export default Dropdown;
