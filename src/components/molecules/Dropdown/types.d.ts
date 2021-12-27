import { BoxComponent, CommonProps } from "../../../utils/global";

export type DropdownProps = CommonProps &
  BoxComponent<number> & {
    /** Dropdown content elements */
    content?: { name: string; icon?: JSX.Element }[];
  };
