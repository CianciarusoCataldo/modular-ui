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
  titleClassName = "title-default",
  headerClassName = "header-default",
  bodyClassName = "body-default",
  footerClassName = "footer-default",
}: CardProps) => {
  return wrapComponent(
    <div id="modular-card" className={className}>
      <p className={classNames("title", titleClassName)}>{title}</p>
      <div className="container-main">
        {header && (
          <div>
            <div className="container-header">
              {icon}
              <div className={classnames("header", headerClassName)}>
                {header}
              </div>
            </div>
            <Divider />
          </div>
        )}
        <div className={classnames("body", bodyClassName)}>{body}</div>
        {children}
        {footer && (
          <div>
            <Divider />
            <div className={classnames("footer", footerClassName)}>
              {footer}
            </div>
          </div>
        )}
      </div>
    </div>,
    hide
  );
};

export default Card;