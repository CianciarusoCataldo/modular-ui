import {
  CommonProps,
  ComponentWithChildren,
  BoxComponent,
} from "../../../utils/global";

export type InputProps<T = any> = CommonProps &
  BoxComponent<string> & {
    readOnly?: boolean;
    placeholder?: string;
  };
