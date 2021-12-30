import {
  BoxComponent,
  CommonProps,
  ComponentWithChildren,
} from "../../../utils/global";

export type CardProps = CommonProps &
  ComponentWithChildren &
  BoxComponent & {
    /** Card header content */
    header?: JSX.Element | string;

    /** Card body content */
    body?: JSX.Element | string;

    /** Card footer content */
    footer?: JSX.Element | string;
  };
