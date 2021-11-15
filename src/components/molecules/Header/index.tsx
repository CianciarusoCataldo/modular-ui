import "./styles.css";

import React from "react";

import { HeaderProps } from "./types";
import classNames from "classnames";
/**
 *
 * @param param0
 *
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Header = ({ content = <div />, className }: HeaderProps) => {
  return (
    <header className={classNames("modular-header", className)}>
      {content}
    </header>
  );
};

export default Header;
