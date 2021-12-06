import "./styles.css";

import React from "react";
import classnames from "classnames";

import { CardProps } from "./types";

import Divider from "../../atoms/Divider";
import classNames from "classnames";
import { wrapComponent } from "../Wrapper";

/**
 *
 *  @param title Card title
 *  @param icon A custom icon showed before the Card title
 *  @param header Card header content
 *  @param body Card body content
 *  @param footer Card footer content
 *  @param className A custom classname applied on Card main container
 *  @param titleClassName A custom classname applied on Card title element
 *  @param headerClassName A custom classname applied on Card header element
 *  @param bodyClassName A custom classname applied on Card body element
 *  @param footerClassName A custom classname applied on Card footer element
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Card = ({
  title,
  className,
  icon,
  header,
  body,
  footer,
  children,
  hide,
  titleClassName,
  headerClassName,
  bodyClassName,
  footerClassName,
  dark,
}: CardProps) => {
  return wrapComponent(
    <div id="modular-card" className={className}>
      <p className={titleClassName || "title"}>{title}</p>
      <div className="container-main">
        {header && (
          <div>
            <div className="container-header">
              {icon}
              <div className={headerClassName || "header"}>{header}</div>
            </div>
            <Divider />
          </div>
        )}
        <div className={bodyClassName || "body"}>{body}</div>
        {children}
        {footer && (
          <div>
            <Divider />
            <div className={footerClassName || "footer"}>{footer}</div>
          </div>
        )}
      </div>
    </div>,
    hide,
    dark
  );
};

export default Card;
