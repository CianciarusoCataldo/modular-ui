import "./styles.css";

import React from "react";

import { DividerProps } from "./types";
import Wrapper, { wrapComponent } from "../../molecules/Wrapper";

/**
 * A simple divider, useful to separate sections and paragraphs
 *
 * @param className A custom className applied on main container
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Divider = ({ className, id, hide }: DividerProps) => {
  return wrapComponent(
    <div id="modular-divider" className={className} data-id={id} />,
    hide
  );
};

export default Divider;
