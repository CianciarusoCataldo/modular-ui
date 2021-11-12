export interface CardProps {
  /** A custom classname applied on Card component */
  className?: string;

  /** A custom icon showed before the Card title */
  icon?: JSX.Element;

  /** Card title */
  title?: JSX.Element | string;

  /** Card header content */
  header?: JSX.Element | string;

  /** Card body content */
  body?: JSX.Element | string;

  /** Card footer content */
  footer?: JSX.Element | string;

  titleClassName?: string;

  bodyClassName?: string;

  headerClassName?: string;

  footerClassName?: string;
}
