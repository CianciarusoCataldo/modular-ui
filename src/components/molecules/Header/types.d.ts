import {
  BuilderComponent,
  CommonProps,
  ComponentWithChildren,
} from "../../../utils/global";

/** Header component props */
export type HeaderProps = CommonProps &
  ComponentWithChildren<BuilderComponent | BuilderComponent[]>;
