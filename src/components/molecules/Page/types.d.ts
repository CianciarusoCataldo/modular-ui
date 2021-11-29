import { CommonProps } from "../../../global";

export type PageProps = CommonProps & {
  /** Page content element(s) */
  children?: JSX.Element | JSX.Element[];

  /** Page contents orientation */
  orientation?: "vertical" | "horizontal";
};
