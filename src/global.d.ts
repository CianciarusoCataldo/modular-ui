import React from "react";

export interface CommonProps {
  className?: string;
  id?: string;
  hide?: boolean;
  /** enable/disable dark mode */
  dark?: boolean;
}

export interface BoxComponent<T = any> {
  value?: T;
  onChange?: (value: T) => void;
  onClick?: (value: T) => void;
}

export interface ComponentWithChildren<T = JSX.Element> {
  children?: T;
}
