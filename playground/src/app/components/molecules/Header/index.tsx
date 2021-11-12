import "./styles.css";
import { HeaderProps } from "./types";

const Header = ({ content = <div /> }: HeaderProps) => {
  return <header className="modular-header">{content}</header>;
};

export default Header;
