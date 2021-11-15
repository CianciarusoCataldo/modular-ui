import "./styles.css";

import React from "react";

import { DividerProps } from "./types";

/**
 * A simple divider, useful to separate sections and paragraphs
 *
 * @param className A custom className applied on main container
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Divider = ({ className }: DividerProps) => {
  return <div id="modular-divider" className={className} />;
};

export default Divider;
