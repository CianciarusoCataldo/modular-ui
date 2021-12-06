import "./styles.css";

import { LinkProps } from "./types";
import { applyWrapperMiddleware, Wrappers } from "../../molecules/Wrapper";

/**
 * A re-defined <a> component, designed to be better used with links
 *
 * @param label link label
 *
 * @param className A custom className applied on main container
 *
 * @param children Children component, displayed under the Link label
 *
 * @param to Link url
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Link = ({ to, label, newTab, ...commonProps }: LinkProps) => {
  console.log(commonProps.hide);
  return applyWrapperMiddleware(
    label,
    "modular-link",
    commonProps,
    {
      href: to,
      target: newTab ? "_blank" : undefined,
    },
    Wrappers.A
  );
};

export default Link;
