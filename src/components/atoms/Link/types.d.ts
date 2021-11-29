import {
  CommonProps,
  ComponentWithChildren,
  BoxComponent,
} from "../../../global";

export type LinkProps = CommonProps &
  ComponentWithChildren & {
    /** Link URL */
    to: string;
    label: string;
  };
