import "./shared-styles.css";
import classNames from "classnames";
import React from "react";
import { BoxComponent, BuilderProps } from "./global";

export const buildComponent = ({
  name,
  Component,
  commonProps,
  additionalProps,
  wrapper,
}: BuilderProps) => {
  const SelectedWrapper = wrapper || "div";

  return (
    <SelectedWrapper
      data-id={commonProps.id}
      id={name}
      className={classNames(commonProps.className, {
        dark: commonProps.dark,
        "component-hidden": commonProps.hide,
        shadowed: commonProps.shadow,
        styled: !commonProps.unstyled,
      })}
      {...additionalProps}
    >
      {Component}
    </SelectedWrapper>
  );
};

export const buildBoxComponent = <T extends any>({
  value: actualValue,
  defaultValue,
  label,
  callBack,
}: BoxComponent<T> & {
  defaultValue?: T;
  callBack: (value: T, setValue: (newValue: T) => void) => BuilderProps;
}) => {
  const startValue = actualValue || defaultValue;

  const [value, setValue] = React.useState<T>(startValue);

  React.useEffect(() => {
    if (actualValue !== undefined && actualValue !== null) {
      setValue(actualValue);
    }
  }, [actualValue]);

  let { commonProps, additionalProps, ...props } = callBack(value, setValue);

  return buildComponent({
    ...props,
    commonProps: { ...commonProps, shadow: false, className: undefined },
    Component: (
      <div className="box-component">
        {label && <div className="box-label">{label}</div>}
        <div
          className={classNames(
            commonProps.className,
            {
              shadowed: commonProps.shadow,
            },
            "container"
          )}
          {...additionalProps}
        >
          {props.Component}
        </div>
      </div>
    ),
  });
};
