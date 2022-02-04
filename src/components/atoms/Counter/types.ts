import {
  BoxComponent,
  CommonProps,
  ComponentWithCallback,
  GenericInputComponent,
} from "../../../utils/global";

/** Input component props */
export type CounterProps<T = any> = CommonProps &
  GenericInputComponent &
  Omit<BoxComponent<number>, "icon"> &
  ComponentWithCallback<number>;
