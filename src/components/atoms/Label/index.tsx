import "./styles.css";

import { LabelProps } from "./types";

import { buildComponent } from "../../../utils";

const Label = ({ children, ...commonProps }: LabelProps) => {
  return buildComponent({
    name: "modular-label",
    Component: children,
    wrapper: "p",
    commonProps,
  });
};

export default Label;
