import "./styles.css";
import React from "react";
import classNames from "classnames";

import { DrawerProps } from "./types";

import Button from "../../atoms/Button";
import Divider from "../../atoms/Divider";
import { buildComponent } from "../../../utils";

/**
 * A modern drawer, easy to integrate and to customize.
 *
 * @param elements Drawer elements array
 * @param {JSX.Element | Element} logo Drawer logo, displayed on top (when Drawer is open)
 * @param {()=>void} onClose Callback triggered on Drawer close
 * @param {string} className `common modular-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common modular-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common modular-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common modular-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common modular-ui prop` - Hide/show component
 * @param {boolean} shadow `common modular-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 *@example <caption>Example Drawer usage</caption>
 *import { render } from "react-dom";
 *import { Drawer } from '@cianciarusocataldo/modular-ui';
 *
 * render(<Drawer elements={[{ text:"Element 0" }]} />, document.getElementById("root"));
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Drawer = ({
  children,
  elements,
  onClose,
  logo,
  hide,
  className,
  ...commonProps
}: DrawerProps) => {
  const [firstClicked, setFirstClick] = React.useState<boolean>(false);

  return buildComponent({
    name: "modular-drawer",
    commonProps: {
      ...commonProps,
      className: classNames(
        {
          "ease-in": !hide,
          "ease-out": firstClicked && hide,
          "component-hidden": !firstClicked && hide,
        },
        className
      ),
    },
    Component: (
      <div className="container-internal">
        <div className="buttons-panel">
          {logo}
          <Button
            dark={commonProps.dark}
            unstyled
            id="drawer_close_button"
            onClick={() => {
              setFirstClick(true);
              onClose();
            }}
            className="close-button"
          >
            {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="37"
                viewBox="0 0 11 18"
              >
                <path d="M8.6812.1963l2.1208928 2.120293-8.484 8.4864L.1972 8.6827z" />
                <path d="M10.8032656 15.0470656l-2.1213 2.1213-8.4852-8.4852 2.1213-2.1213z" />
              </svg>
            }
          </Button>
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
                      unstyled
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
                    <Divider dark={commonProps.dark} />
                  </div>
                );
              })}
            {children}
          </div>
        </div>
      </div>
    ),
  });
};

export default Drawer;
