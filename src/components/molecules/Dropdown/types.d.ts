import { CommonProps } from "../../../global";

export type DropdownProps = CommonProps & {
  /** Dropdown content elements */
  content?: { name: string; icon?: JSX.Element }[];

  /** Dropdown default value */
  placeholder?: string | JSX.Element;

  /** Dropdown actual selected value */
  actualValue?: number;

  onChange?: (value: string, index: number) => void;
};
