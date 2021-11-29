import { CommonProps } from "../../../global";

export type DropdownProps = CommonProps & {
  /** Dropdown content elements */
  content?: { name: string; action: () => void; icon?: JSX.Element }[];

  /** Dropdown default value */
  defaultValue?: string | JSX.Element;
};
