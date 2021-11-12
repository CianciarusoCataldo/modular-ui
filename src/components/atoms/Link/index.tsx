import "./styles.css";

import React from "react";
import { RouterLinkProps } from "./types";

/**
 *
 * @param to Destination path
 * @param label Label showed into the button
 * @param className A custom className applied on main container
 *
 */
const Link = ({ to, label, className }: RouterLinkProps) => {
  return (
    <p id="modular-link" className={className}>
      {label}
    </p>
  );
};

export default Link;
