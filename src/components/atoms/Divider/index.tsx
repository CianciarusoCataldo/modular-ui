import "./styles.css";

import { DividerProps } from "./types";
import { buildComponent } from "../../../utils";
import classNames from "classnames";

/**
 * A simple divider, useful to separate sections and paragraphs
 *
 * @param className A custom className applied on main container
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Divider = ({ className, ...props }: DividerProps) => {
  return buildComponent({
    name: "modular-divider",
    commonProps: {
      ...props,
      className: classNames(className, "container"),
      shadow: false,
    },
  });
};

export default Divider;
