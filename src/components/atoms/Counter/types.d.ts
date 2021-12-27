import {
  CommonProps,
  ComponentWithChildren,
  BoxComponent,
} from "../../../utils/global";

/** Input component props */
export type CounterProps<T = any> = CommonProps &
  BoxComponent<number> & {
    readOnly?: boolean;
    placeholder?: string;
  };
