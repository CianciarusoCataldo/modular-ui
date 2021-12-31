import {
  BoxComponent,
  CommonProps,
  ComponentWithCallback,
  GenericInputComponent,
} from "../../../utils/global";

/** Input component props */
export type InputProps<T = any> = CommonProps &
  GenericInputComponent &
  Omit<BoxComponent<string>, "icon"> &
  ComponentWithCallback;
