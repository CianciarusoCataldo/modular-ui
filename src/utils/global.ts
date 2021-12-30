export interface CommonProps {
  /** custom className (to better customize it)*/
  className?: string;

  /** data-id parameter (for testing purpose, to easily find the component)*/
  id?: string;

  /** Hide/show component */
  hide?: boolean;

  /** enable/disable dark mode */
  dark?: boolean;

  /** Enable/disable shadow behind component (to better customize it) */
  shadow?: boolean;

  /** Style/unstyle component (to better customize it) */
  unstyled?: boolean;
}

export interface BoxComponent<T = any, K = JSX.Element | Element> {
  /** Actual box value */
  value?: T;

  /** Custom box icon */
  icon?: K;

  /** Box top label */
  label?: string | Element | JSX.Element;
}

export interface GenericInputComponent<T = string> {
  readOnly?: boolean;
  placeholder?: T;
}

export interface ComponentWithCallback<T = string> {
  onChange?: (newValue: T) => void;
}

export interface ComponentWithChildren<T = JSX.Element> {
  children?: T;
}

export type BuilderComponent = Element | JSX.Element | string;

export type BuilderProps<T = BuilderComponent | BuilderComponent[]> = {
  name: string;
  Component?: T;
  commonProps?: CommonProps;
  additionalProps?: any;
  wrapper?: Wrappers;
};

export enum Wrappers {
  DIV = "div",
  A = "a",
  HEADER = "header",
  BUTTON = "button",
}
