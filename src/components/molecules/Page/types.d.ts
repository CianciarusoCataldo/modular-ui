export interface PageProps {
  /** Page content element(s) */
  children?: JSX.Element | JSX.Element[];

  /** Page contents orientation */
  orientation?: "vertical" | "horizontal";

  /** A custom className applied on the component container */
  className?: string;
}
