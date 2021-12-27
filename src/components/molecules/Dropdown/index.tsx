import "./styles.css";
import React from "react";
import classnames from "classnames";

import { DropdownProps } from "./types";

import classNames from "classnames";
import { buildBoxComponent } from "../../../utils";
import { Button } from "../../..";

/**
 * Show a list of elements in a dropdown menu (by default, with fade-in and out effects).
 * Can be easily customized and every element style and behaviour (with a callback) can
 * be customized too.
 *
 * @param value actual selected element (as index). If not set, default value (0) will be used.
 * @param content Dropdown content elements
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Dropdown = ({
  content = [],
  onChange,
  shadow,
  value,
  onClick,
  onMouseEnter,
  onMouseLeave,
  label,
  readOnly,
  icon,
  ...commonProps
}: DropdownProps) => {
  const [isVisible, setVisible] = React.useState(false);

  return buildBoxComponent<number>({
    defaultValue: 0,
    value,
    callBack: (value, setValue) => {
      const selectedItem = content[value] || {
        name: "",
        icon: <div />,
      };

      return {
        name: "modular-dropdown",
        Component: [
          <Button
            unstyled
            onClick={() => {
              setVisible(!isVisible);
            }}
            shadow={shadow}
            dark={commonProps.dark}
            className="button"
            id="options-menu"
            key="options-menu"
          >
            <div key="label" className="label">
              <div className="label">{selectedItem.icon}</div>
              <div className="label">{selectedItem.name}</div>
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
          </Button>,
          <div
            key="options"
            className={classnames("options", {
              "component-hidden": !isVisible,
              shadowed: shadow,
            })}
          >
            {content.map((item, index) => (
              <div key={`dropdown_option_${index}`} className="option">
                <Button
                  unstyled
                  id={`dropdown_option_${index}`}
                  onClick={() => {
                    onClick && onClick(index);
                    setValue(index);
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
                </Button>
              </div>
            ))}
          </div>,
        ],
        commonProps,
      };
    },
  });
};

export default Dropdown;
