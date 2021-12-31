import "./styles.css";

import React from "react";

import { CardProps } from "./types";

import Divider from "../../atoms/Divider";
import { buildBoxComponent } from "../../../utils";

/**
 * A Card component. Its UI depends on given parameters (header, body and footer)
 *
 * @param {JSX.Element | Element} icon A custom icon showed before the Card header
 * @param {JSX.Element | Element | string} header Card header content
 * @param {JSX.Element | Element | string} body Card body content
 * @param {JSX.Element | Element | string} footer Card footer content
 * @param {string} className `common modular-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common modular-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common modular-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common modular-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common modular-ui prop` - Hide/show component
 * @param {boolean} shadow `common modular-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 *@example <caption>Example Card usage</caption>
 *import { render } from "react-dom";
 *import { Card } from '@cianciarusocataldo/modular-ui';
 *
 * render(<Card header="Example header" body="Example body" footer="Example footer" />, document.getElementById("root"));
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Card = ({
  icon,
  header,
  body,
  footer,
  children,
  className,
  label,
  value,
  ...commonProps
}: CardProps) => {
  return buildBoxComponent({
    callBack: () => ({
      name: "modular-card",
      Component: [
        header && (
          <div key="modular_card_header">
            <div className="container-header">
              {icon}
              <div className="header">{header}</div>
            </div>
            <Divider />
          </div>
        ),
        <div className="body" key="modular_card_body">
          {body}
        </div>,
        children,
        footer && (
          <div key="modular_card_footer">
            <Divider />
            <div className="footer">{footer}</div>
          </div>
        ),
      ],
      commonProps: {
        ...commonProps,
        shadow: false,
      },
    }),
    defaultValue: "",
    label,
  });
};

export default Card;
