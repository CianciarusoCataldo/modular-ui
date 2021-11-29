import { CommonProps, ComponentWithChildren } from "../../../global";

export type ButtonProps = CommonProps &
  ComponentWithChildren &
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    /** If true, no other styles will be applied on main container (useful for image only buttons) */
    noStyles?: boolean;
  };
