import "./styles.css";

import React from "react";
import { RouterLinkProps } from "./types";

import RouterDom from "react-router-dom";

/**
 *
 * @param to Destination path
 * @param label Label showed into the button
 * @param className A custom className applied on main container
 *
 */
const RouterLink = ({ to, label, className }: RouterLinkProps) => {
  return (
    <RouterDom.NavLink to={to}>
      <p id="modular-link" className={className}>
        {label}
      </p>
    </RouterDom.NavLink>
  );
};

export default RouterLink;
