import "./styles.css";

import React from "react";
import { LinkProps } from "./types";
import { wrapComponent } from "../../molecules/Wrapper";

/**
 * A re-defined <a> component, designed to be better used with links
 *
 * @param label link label
 *
 * @param className A custom className applied on main container
 *
 * @param children Children component, displayed under the Link label
 *
 * @param to Link url
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Link = ({ className, to, hide, id, label, newTab }: LinkProps) => {
  return wrapComponent(
    <a
      id="modular-link"
      className={className}
      href={to}
      data-id={id}
      target={newTab && "_blank"}
    >
      {label}
    </a>,
    hide
  );
};

export default Link;
