import "./styles.css";
import { useSelector } from "react-redux";
import { RouterLinkProps } from "./types";

import { NavLink } from "react-router-dom";

import { getRoutesPaths } from "api/state-slices/config/selectors";

/**
 *
 * @param to Destination path
 * @param label Label showed into the button
 * @param className A custom className applied on main container
 *
 */
const RouterLink = ({ to, label, className }: RouterLinkProps) => {
  const PATHS = useSelector(getRoutesPaths);

  return (
    <NavLink to={PATHS[to]}>
      <p id="modular-link" className={className}>
        {label}
      </p>
    </NavLink>
  );
};

export default RouterLink;
