import "./styles.css";
import React from "react";
import classNames from "classnames";

import { DrawerProps } from "./types";

import Button from "../../atoms/Button";
import Divider from "../../atoms/Divider";

/**
 * A modern drawer, easy to integrate and to customize.
 *
 * @param elements Drawer elements array
 * @param className Custom className applied on component main container
 * @param isOpen Drawer visibility
 * @param onClose Callback triggered on Drawer close
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Drawer = ({ elements, className, isOpen, onClose }: DrawerProps) => {
  return (
    <div id="modular-drawer">
      <div
        className={classNames(
          "container",
          {
            "ease-in": isOpen,
            "ease-out": !isOpen,
          },
          className
        )}
      >
        <div className="container-internal">
          <div className="buttons-panel">
            <button onClick={onClose} className="close-button">
              {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="37"
                  viewBox="0 0 11 18"
                >
                  <path
                    fill="#999"
                    d="M8.6812.1963l2.1208928 2.120293-8.484 8.4864L.1972 8.6827z"
                  />
                  <path
                    fill="#999"
                    d="M10.8032656 15.0470656l-2.1213 2.1213-8.4852-8.4852 2.1213-2.1213z"
                  />
                </svg>
              }
            </button>
          </div>
          <div className="elements">
            <div>
              {elements &&
                elements.map((element, index) => {
                  const isActive =
                    element.isActiveCallback && element.isActiveCallback();

                  return (
                    <div
                      key={`drawer_element_${index}`}
                      data-id={`drawer_element_${index}`}
                      className="element"
                    >
                      <Button
                        noStyles
                        id={`drawer_button_${index}`}
                        onClick={element.actionCallback}
                      >
                        <div className="button">
                          <div className="icon">{element.icon}</div>
                          <div
                            className={classNames("text", {
                              active: isActive,
                              inactive: !isActive,
                            })}
                          >
                            {element.text}
                          </div>
                        </div>
                      </Button>
                      <Divider />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
