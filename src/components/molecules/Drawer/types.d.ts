import { CommonProps, ComponentWithChildren } from "../../../global";

/**
 * Drawer element
 */
export interface DrawerElement {
  /** Drawer element label */
  text: string;

  /** Callback triggered when clicking on this element */
  actionCallback?: () => void;

  /** Custom className applied on this Drawer element container */
  className?: string;

  /** custom icon showed at the left of the Drawer element's label */
  icon?: JSX.Element;

  /** Function invoked to determine if this element is active (its label will be colored differently) */
  isActiveCallback?: () => boolean;
}

export type DrawerProps = CommonProps &
  ComponentWithChildren & {
    /** Drawer visibility */
    isOpen?: boolean;

    /** Callback triggered on Drawer close */
    onClose?: () => void;

    logo?: JSX.Element;

    /** Drawer elements array */
    elements?: DrawerElement[];
  };
