export interface ModalProps {
  overlayClassname?: string;
  className?: string;
  title?: string;
  Content?: JSX.Element;
  isVisible?: boolean;
  onClose?: () => void;
}
