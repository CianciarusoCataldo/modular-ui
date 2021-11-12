export interface DropdownProps {
  /** Dropdown content elements */
  content?: { name: string; action: () => void; icon?: JSX.Element }[];

  /** Custom classname applied on Dropdown component */
  className?: string;

  /** Dropdown default value */
  defaultValue?: string | JSX.Element;
}
