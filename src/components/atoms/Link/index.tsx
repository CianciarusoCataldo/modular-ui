import "./styles.css";

import { LinkProps } from "./types";
import { buildComponent, Wrappers } from "../../../utils";

/**
 * A re-defined <a> component, designed to be better used with links
 *
 * @param label link label
 *
 * @param children Children component, displayed under the Link label
 *
 * @param to Link url
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Link = ({ to, children, newTab, ...commonProps }: LinkProps) => {
  return buildComponent({
    name: "modular-link",
    Component: children,
    commonProps,
    additionalProps: {
      href: to,
      target: newTab ? "_blank" : undefined,
    },
    wrapper: Wrappers.A,
  });
};

export default Link;
