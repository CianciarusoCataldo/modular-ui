import {
  ClickableComponent,
  CommonProps,
  ComponentWithChildren,
} from "../../../global";

export type ButtonProps = ComponentWithChildren<
  string | Element | JSX.Element
> &
  CommonProps &
  ClickableComponent & {
    /** If true, no other styles will be applied on main container (useful for image only buttons) */
    noStyles?: boolean;
  };
