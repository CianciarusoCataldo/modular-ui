import "./styles.css";
import classNames from "classnames";
import React from "react";
import { CommonProps } from "../../../global";

const Wrapper = ({
  hide,
  children,
  dark,
}: {
  hide?: boolean;
  children: JSX.Element;
  dark?: boolean;
}) => {
  if (hide) {
    return <div />;
  }

  return (
    <div className={classNames({ dark: dark, standard: !dark })}>
      {children}
    </div>
  );
};

export const wrapComponent = (
  Component: JSX.Element,
  hide?: boolean,
  dark?: boolean
) => (
  <Wrapper hide={hide} dark={dark}>
    {Component}
  </Wrapper>
);

export enum Wrappers {
  DIV = "div",
  A = "a",
}

export const applyWrapperMiddleware = (
  Component: JSX.Element | JSX.Element[] | string,
  name: string,
  commonProps: CommonProps,
  additionalProps?: any,
  wrapper?: Wrappers
) => {
  const WrapWith = wrapper || "div";
  return (
    <WrapWith
      data-id={commonProps.id}
      id={name}
      className={classNames(commonProps.className, {
        dark: commonProps.dark,
        "component-hidden": commonProps.hide,
      })}
      {...additionalProps}
    >
      {Component}
    </WrapWith>
  );
};
