import "./styles.css";

import React from "react";

import { CardProps } from "./types";

import Divider from "../../atoms/Divider";
import { buildComponent } from "../../../utils";
import classNames from "classnames";

/**
 *
 *  @param title Card title
 *  @param icon A custom icon showed before the Card title
 *  @param header Card header content
 *  @param body Card body content
 *  @param footer Card footer content
 *  @param titleClassName A custom classname applied on Card title element
 *  @param headerClassName A custom classname applied on Card header element
 *  @param bodyClassName A custom classname applied on Card body element
 *  @param footerClassName A custom classname applied on Card footer element
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Card = ({
  title,
  icon,
  header,
  body,
  footer,
  children,
  titleClassName,
  headerClassName,
  bodyClassName,
  footerClassName,
  unstyled,
  ...commonProps
}: CardProps) => {
  return buildComponent({
    name: "modular-card",
    Component: [
      <p
        key="card_title"
        className={classNames(titleClassName, { title: !unstyled })}
      >
        {title}
      </p>,
      <div
        key="card-container"
        className={classNames("container-main", {
          shadowed: commonProps.shadow,
        })}
      >
        {header && (
          <div>
            <div className="container-header">
              {icon}
              <div
                className={classNames(headerClassName, { header: !unstyled })}
              >
                {header}
              </div>
            </div>
            <Divider />
          </div>
        )}
        <div className={classNames(bodyClassName, { body: !unstyled })}>
          {body}
        </div>
        {children}
        {footer && (
          <div>
            <Divider />
            <div className={classNames(footerClassName, { footer: !unstyled })}>
              {footer}
            </div>
          </div>
        )}
      </div>,
    ],
    commonProps: { ...commonProps, shadow: false },
  });
};

export default Card;
