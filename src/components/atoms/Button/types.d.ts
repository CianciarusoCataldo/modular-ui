import {
  BuilderComponent,
  CommonProps,
  ComponentWithChildren,
} from "../../../utils/global";

/** Button component props */
export type ButtonProps = ComponentWithChildren<
  BuilderComponent | BuilderComponent[]
> &
  CommonProps & {
    /** callback triggered when the button is clicked */
    onClick?: () => void;

    /**callback triggered when the cursor enter the component */
    onMouseEnter?: () => void;

    /** callback triggered when the cursor exit the component */
    onMouseLeave?: () => void;

    /**enable or disable the button functionalities (UI will reflect it too) */
    disabled?: boolean;
  };
