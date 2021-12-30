import {
  BoxComponent,
  CommonProps,
  ComponentWithCallback,
} from "../../../utils/global";

export type DropdownProps = CommonProps &
  BoxComponent<number> &
  ComponentWithCallback<number> & {
    /** Dropdown content elements */
    content?: { name: string; icon?: JSX.Element }[];
  };
