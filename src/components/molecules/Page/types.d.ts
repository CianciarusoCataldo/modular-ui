import { CommonProps, ComponentWithChildren } from "../../../utils/global";

export type PageProps = CommonProps &
  ComponentWithChildren<JSX.Element | JSX.Element[]> & {
    /** Page contents orientation */
    orientation?: "vertical" | "horizontal";
  };
