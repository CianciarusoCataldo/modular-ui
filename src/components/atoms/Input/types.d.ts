import {
  CommonProps,
  ComponentWithChildren,
  BoxComponent,
} from "../../../global";

/** Input component props */
export type InputProps<T = any> = CommonProps &
  BoxComponent<number | string> & {
    numeric?: boolean;
  };
