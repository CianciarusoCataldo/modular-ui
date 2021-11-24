export type LinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  /**
   Link URL
   */
  to?: string;

  /** A custom className applied on Link component */
  className?: string;

  /** Children component, displayed under the Link label */
  children?: JSX.Element | string;
};
