import {
  BoxComponent,
  CommonProps,
  ComponentWithCallback,
} from "../../../utils/global";

/** Dropdown component props */
export type DropdownProps = CommonProps &
  BoxComponent<number> &
  ComponentWithCallback<number> & {
    /** Dropdown content elements */
    content?: { name: string; icon?: JSX.Element }[];
  };
