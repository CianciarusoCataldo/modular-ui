import { CommonProps, ComponentWithChildren } from "../../../utils/global";

export type LinkProps = CommonProps &
  ComponentWithChildren<string> & {
    /** Link URL */
    to: string;
    newTab?: boolean;
  };
