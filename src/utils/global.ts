/** Props shared between all components */
export interface CommonProps {
  /** custom className (to better customize it)*/
  className?: string;

  /** `data-id` parameter (for testing purpose, to easily find the component into the DOM) */
  id?: string;

  /** Hide/show component */
  hide?: boolean;

  /** Enable/disable dark mode */
  dark?: boolean;

  /** Enable/disable shadow behind component (to better customize it) */
  shadow?: boolean;

  /** Style/unstyle component (to better customize it) */
  unstyled?: boolean;
}

export interface BoxComponent<T = any, K = JSX.Element | Element> {
  /** Actual component value */
  value?: T;

  /** Custom component icon */
  icon?: K;

  /** Box component label */
  label?: string | Element | JSX.Element;
}

/** An input element, to handle various input content type (like strings or numbers) */
export interface GenericInputComponent<T = string> {
  /** if true, the input content won't be editable */
  readOnly?: boolean;

  /** A label showed when no input is given */
  placeholder?: T;
}

/** A component that provide a callback to handle its content changes */
export interface ComponentWithCallback<T = string> {
  /** Callback triggered when input content changes */
  onChange?: (newValue: T) => void;
}

/** A component with children element */
export interface ComponentWithChildren<T = JSX.Element> {
  /** Component children */
  children?: T;
}

/** Allowed component type for component builder */
export type BuilderComponent = Element | JSX.Element | string;

/** Component builder props */
export type BuilderProps<T = BuilderComponent | BuilderComponent[]> = {
  /** Component name (its DOM id) */
  name: string;

  /** Component to render */
  Component?: T;

  /** Shared props */
  commonProps?: CommonProps;

  /** Additional props applied on main container */
  additionalProps?: any;

  /** Component wrapper (like `div` or `button`, for example) */
  wrapper?: Wrappers;
};

/** Supported components wrappers */
export enum Wrappers {
  DIV = "div",
  A = "a",
  HEADER = "header",
  BUTTON = "button",
}