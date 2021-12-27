import "./styles.css";

import { LinkProps } from "./types";
import { buildComponent } from "../../../utils";
import { Wrappers } from "../../../utils/global";

/**
 * A re-defined <a> component, designed to be better used with links
 *
 * @param children Children component (string only), will be the Link text to click
 *
 * @param to Link url
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Link = ({ to, children, newTab, ...commonProps }: LinkProps) =>
  buildComponent({
    name: "modular-link",
    Component: children,
    commonProps,
    additionalProps: {
      href: to,
      target: newTab ? "_blank" : undefined,
    },
    wrapper: Wrappers.A,
  });

export default Link;
