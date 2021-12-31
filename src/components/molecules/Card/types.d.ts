import {
  BoxComponent,
  BuilderComponent,
  CommonProps,
  ComponentWithChildren,
} from "../../../utils/global";

/** Card component props */
export type CardProps = CommonProps &
  ComponentWithChildren &
  BoxComponent & {
    /** Card header content */
    header?: BuilderComponent;

    /** Card body content */
    body?: BuilderComponent;

    /** Card footer content */
    footer?: BuilderComponent;
  };
