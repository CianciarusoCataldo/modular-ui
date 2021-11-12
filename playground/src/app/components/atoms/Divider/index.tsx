import "./styles.css";

import { DividerProps } from "./types";

/**
 *
 * @param className A custom className applied on main container
 *
 */
const Divider = ({ className }: DividerProps) => {
  return <div id="modular-divider" className={className} />;
};

export default Divider;
