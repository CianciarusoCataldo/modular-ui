import { CommonProps, ComponentWithChildren } from "../../../global";

export type ModalProps = CommonProps &
  ComponentWithChildren & {
    /** A custom className applied on the Modal container */
    overlayClassName?: string;

    /** Modal title */
    title?: string;

    /** Callback triggered when modal is closed */
    onClose?: () => void;
  };
