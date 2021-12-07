import { CommonProps } from "../../../global";

export type DropdownProps = CommonProps & {
  /** Dropdown content elements */
  content?: { name: string; icon?: JSX.Element }[];

  /** Dropdown default value */
  defaultValue?: string | JSX.Element;

  onChange?: (value: string, index: number) => void;
};
