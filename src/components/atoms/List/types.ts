import { BuilderComponent, CommonProps } from "../../../utils/global";

/** List component props */
export type ListProps = CommonProps & {
  /** List elements (if unstyled == `false`, every element will include a dot at its start) */
  elements?: BuilderComponent[];
};
