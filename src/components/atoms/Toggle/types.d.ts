import {
  BoxComponent,
  CommonProps,
  ComponentWithCallback,
} from "../../../utils/global";

/** Toggle component props */
export type ToggleProps = CommonProps &
  BoxComponent<boolean> &
  ComponentWithCallback<boolean>;
