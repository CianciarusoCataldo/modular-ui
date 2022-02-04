import {
  BoxComponent,
  BuilderComponent,
  CommonProps,
  ComponentWithCallback,
} from "../../../utils/global";

/** Toggle component props */
export type ToggleProps = CommonProps &
  BoxComponent<boolean> &
  ComponentWithCallback<boolean> & {
    offIcon?: BuilderComponent;
    onIcon?: BuilderComponent;
  };
