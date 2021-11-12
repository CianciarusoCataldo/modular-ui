export interface PageProps {
  /** Page content element(s) */
  children?: JSX.Element | JSX.Element[];

  /** Page contents orientation */
  orientation?: "vertical" | "horizontal";
}
