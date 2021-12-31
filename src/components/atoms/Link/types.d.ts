import { CommonProps, ComponentWithChildren } from "../../../utils/global";

export type LinkProps = CommonProps &
  ComponentWithChildren<string> & {
    /** Link URL */
    to: string;

    /**if true, the link will be opened in a new tab */
    newTab?: boolean;
  };
