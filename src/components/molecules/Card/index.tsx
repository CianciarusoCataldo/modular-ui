import "./styles.css";

import React from "react";

import { CardProps } from "./types";

import Divider from "../../atoms/Divider";
import { buildBoxComponent } from "../../../utils";

/**
 *  A Card component. ts UI depends on given parameters (header, body and footer)
 *
 *  @param icon A custom icon showed before the Card header
 *  @param header Card header content
 *  @param body Card body content
 *  @param footer Card footer content
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
