import {
  BoxComponent,
  CommonProps,
  ComponentWithCallback,
} from "../../../utils/global";

/** Single dropdown element */
export interface DropdownElement {
  name: string | JSX.Element;
  icon?: JSX.Element;
}

/** Dropdown component props */
export type DropdownProps = CommonProps &
  BoxComponent<number> &
  ComponentWithCallback<number> & {
    /** Dropdown content elements */
    content?: DropdownElement[];
  };
