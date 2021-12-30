import {
  CommonProps,
  ComponentWithChildren,
  BoxComponent,
  GenericInputComponent,
} from "../../../utils/global";

/** Input component props */
export type CounterProps<T = any> = CommonProps &
  GenericInputComponent &
  BoxComponent<number> &
  ComponentWithCallback<number>;
