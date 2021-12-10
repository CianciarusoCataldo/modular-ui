import "./shared-styles.css";
import classNames from "classnames";
import React from "react";
import { CommonProps } from "../global";

export enum Wrappers {
  DIV = "div",
  A = "a",
  HEADER = "header",
  BUTTON = "button",
}

export const buildComponent = ({
  name,
  Component,
  commonProps,
  additionalProps,
  wrapper,
}: {
  name: string;
  Component?:
    | (Element | JSX.Element | string)
    | (Element | JSX.Element | string)[];
  commonProps?: CommonProps;
  additionalProps?: any;
  wrapper?: Wrappers;
}) => {
  const SelectedWrapper = wrapper || "div";
  return (
    <SelectedWrapper
      data-id={commonProps.id}
      id={name}
      className={classNames(commonProps.className, {
        dark: commonProps.dark,
        "component-hidden": commonProps.hide,
        shadowed: commonProps.shadow,
      })}
      {...additionalProps}
    >
      {Component}
    </SelectedWrapper>
  );
};
