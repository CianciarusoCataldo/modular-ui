import "./styles.css";

import React from "react";

import { HeaderProps } from "./types";

const Header = ({ content = <div /> }: HeaderProps) => {
  return <header className="modular-header">{content}</header>;
};

export default Header;
