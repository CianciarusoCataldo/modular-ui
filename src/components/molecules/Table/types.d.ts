import { BuilderComponent, CommonProps } from "../../../utils/global";

/** Table component props */
export type TableProps = CommonProps & {
  /** if true, the first row will be used as headers (and not generic data) */
  headers?: boolean;

  /** Table rows */
  rows?: BuilderComponent[][];
};
