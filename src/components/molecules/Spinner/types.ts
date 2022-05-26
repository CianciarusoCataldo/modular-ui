import {
  BoxComponent,
  BuilderComponent,
  CommonProps,
  ModularComponent,
} from "../../../utils/global";

/** Spinner component props */
export type SpinnerProps<T = Record<string, BuilderComponent>> = CommonProps &
  BoxComponent<keyof T> & {
    statuses?: T;
  };

export type SpinnerComponent<T = any> = ModularComponent<
  SpinnerProps<T>,
  JSX.Element
>;
