import "./styles.css";

import { DividerProps } from "./types";
import { buildComponent } from "../../../utils";

/**
 * A simple divider, useful to separate sections and paragraphs
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Divider = (props: DividerProps) =>
  buildComponent({
    name: "modular-divider",
    commonProps: props,
  });

export default Divider;
