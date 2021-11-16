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

  /** A custom classname applied on Card title element */
  titleClassName?: string;

  /** A custom classname applied on Card body element */
  bodyClassName?: string;

  /** A custom classname applied on Card header element */
  headerClassName?: string;

  /** A custom classname applied on Card footer element */
  footerClassName?: string;
}
