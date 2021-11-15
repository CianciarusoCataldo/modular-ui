import "./styles.css";

import React from "react";
import { RouterLinkProps } from "./types";

/**
 * A re-defined label, designed to be used with links
 *
 * @param label link label
 *
 * @param className A custom className applied on main container
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Link = ({ label, className }: RouterLinkProps) => {
  return (
    <p id="modular-link" className={className}>
      {label}
    </p>
  );
};

export default Link;
