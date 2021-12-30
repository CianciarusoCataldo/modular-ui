import {
  BuilderComponent,
  CommonProps,
  ComponentWithChildren,
} from "../../../utils/global";

export type ButtonProps = ComponentWithChildren<
  BuilderComponent | BuilderComponent[]
> &
  CommonProps & {
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    disabled?: boolean;
  };
