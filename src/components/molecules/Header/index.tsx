import "./styles.css";

import React from "react";

import { HeaderProps } from "./types";
import classNames from "classnames";
/**
 * A static header. Useful when a content mush be always showed on top
 * when user navigate through the app
 *
 * @param content Header wrapped content
 * @param className a custom className applied on Header main container
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
