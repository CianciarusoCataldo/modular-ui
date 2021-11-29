import React from "react";

export type CommonProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  className?: string;
  id?: string;
  hide?: boolean;
};

export interface BoxComponent<T = any> {
  value?: T;
  onChange?: (value: T) => void;
  onClick?: (value: T) => void;
}

export interface ComponentWithChildren {
  children?: JSX.Element;
}
