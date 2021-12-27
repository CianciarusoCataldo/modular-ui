import {
  BoxComponent,
  CommonProps,
  ComponentWithChildren,
} from "../../../utils/global";

export type CardProps = CommonProps &
  ComponentWithChildren &
  BoxComponent & {
    /** A custom icon showed before the Card title */
    icon?: JSX.Element;

    /** Card header content */
    header?: JSX.Element | string;

    /** Card body content */
    body?: JSX.Element | string;

    /** Card footer content */
    footer?: JSX.Element | string;
  };
