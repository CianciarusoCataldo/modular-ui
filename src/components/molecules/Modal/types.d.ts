import { CommonProps, ComponentWithChildren } from "../../../global";

export type ModalProps = CommonProps &
  ComponentWithChildren & {
    /** A custom className applied on the Modal container */
    overlayClassName?: string;

    /** Modal title */
    title?: string;

    /** Modal visibility */
    isVisible?: boolean;

    /** Callback triggered when modal is closed */
    onClose?: () => void;
  };
