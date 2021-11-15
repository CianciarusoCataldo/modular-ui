export interface ModalProps {
  /** A custom className applied on the Modal container */
  overlayClassName?: string;

  /** A custom className applied on the Modal overlay container */
  className?: string;

  /** Modal title */
  title?: string;

  /** Modal content */
  Content?: JSX.Element;

  /** Modal visibility */
  isVisible?: boolean;

  /** Callback triggered when modal is closed */
  onClose?: () => void;
}
