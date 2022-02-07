import {
  CommonProps,
  ComponentWithCallback,
  BoxComponent,
} from "../../../utils/global";

/** Checkbox component props */
export type CheckboxProps = CommonProps &
  BoxComponent<boolean> &
  ComponentWithCallback<boolean>;