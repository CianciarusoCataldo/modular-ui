import { CommonProps, ComponentWithChildren } from "../../../global";

export type PageProps = CommonProps &
  ComponentWithChildren<JSX.Element | JSX.Element[]> & {
    /** Page contents orientation */
    orientation?: "vertical" | "horizontal";
  };
