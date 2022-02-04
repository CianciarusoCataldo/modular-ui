import {
  BuilderComponent,
  CommonProps,
  ComponentWithChildren,
} from "../../../utils/global";

/** Container component props */
export type ContainerProps = ComponentWithChildren<
  BuilderComponent | BuilderComponent[]
> &
  CommonProps & {
    wrapper?: "div" | "header" | "footer";
    animated?: boolean;
  };
