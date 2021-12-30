import {
  CommonProps,
  ComponentWithChildren,
  BoxComponent,
  GenericInputComponent,
} from "../../../utils/global";

export type InputProps<T = any> = CommonProps &
  GenericInputComponent &
  BoxComponent<string> &
  ComponentWithCallback;
