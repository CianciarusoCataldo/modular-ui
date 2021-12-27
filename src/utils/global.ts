import React from "react";

export interface CommonProps {
  className?: string;
  id?: string;
  hide?: boolean;
  /** enable/disable dark mode */
  dark?: boolean;
  shadow?: boolean;
  unstyled?: boolean;
}

export type BoxComponent<
  T = any,
  K = JSX.Element | Element
> = ClickableComponent<(value: T) => void> & {
  /** Actual box value */
  value?: T;
  icon?: K;
  label?: string | Element | JSX.Element;
  readOnly?: boolean;
};

export interface ComponentWithChildren<T = JSX.Element> {
  children?: T;
}

export interface ClickableComponent<T = () => void> {
  onClick?: T;
  onChange?: T;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  disabled?: boolean;
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
