import "./styles.css";
import React from "react";

import classnames from "classnames";

import { DropdownProps } from "./types";

import { LeftArrow } from "../../../assets/images";
import classNames from "classnames";

const Dropdown = ({
  className: parentClassName,
  content,
  defaultValue,
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
            {<img alt="" className="icon-img" src={LeftArrow} width={10} />}
          </div>
        </button>
        <div
          className={classnames({
            "options-hidden": !isVisible,
            options: isVisible,
          })}
        >
          {content &&
            content.map((item, index) => (
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
