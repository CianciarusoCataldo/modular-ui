import {
  BuilderComponent,
  CommonProps,
  ComponentWithChildren,
} from "../../../utils/global";

/** Drawer component props */
export type DrawerProps = CommonProps &
  ComponentWithChildren<BuilderComponent | BuilderComponent[]> & {
    /** Callback triggered on Drawer close */
    onClose?: () => void;

    /** Drawer logo, displayed on top (when Drawer is open) */
    logo?: () => JSX.Element;

    /** Drawer position, relative to entire window */
    position?:
      | "right"
      | "left"
      | "top"
      | "bottom"
      | "top-left"
      | "top-right"
      | "bottom-left"
      | "bottom-right";
  };
