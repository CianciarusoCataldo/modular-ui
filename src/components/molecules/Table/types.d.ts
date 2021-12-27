import { CommonProps } from "../../../utils/global";

export type TableProps = CommonProps & {
  headers?: boolean;
  rows?: (JSX.Element | string)[][];
};
