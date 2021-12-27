import {
  BuilderComponent,
  ClickableComponent,
  CommonProps,
  ComponentWithChildren,
} from "../../../utils/global";

export type ButtonProps = ComponentWithChildren<
  BuilderComponent | BuilderComponent[]
> &
  CommonProps &
  ClickableComponent;
