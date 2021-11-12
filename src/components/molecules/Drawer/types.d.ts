export interface DrawerElement {
  text: string;
  actionCallback?: () => void;
  className?: string;
  icon?: JSX.Element;
  isActiveCallback?: () => boolean;
}

export interface DrawerProps {
  isOpen?: boolean;
  /** custom className applied on Drawr's main container */
  className?: string;
  onClose?: () => void;
  elements?: DrawerElement[];
}
