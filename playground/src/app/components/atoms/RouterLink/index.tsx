import { NavLink } from "react-router-dom";

import { RouterLinkProps } from "./types";

/**
 * Internal routing link
 *
 * @param to Destination path
 * @param children component showed into the button
 * @param className A custom className applied on main container
 *
 */
const RouterLink = ({ to, children, className }: RouterLinkProps) => {
  return (
    <NavLink className={className} to={to}>
      {children}
    </NavLink>
  );
};

export default RouterLink;
