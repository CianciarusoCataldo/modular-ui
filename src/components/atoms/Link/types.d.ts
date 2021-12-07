import {
  CommonProps,
  ComponentWithChildren,
  BoxComponent,
} from "../../../global";

export type LinkProps = CommonProps &
  ComponentWithChildren<string> & {
    /** Link URL */
    to: string;
    newTab?: boolean;
  };
