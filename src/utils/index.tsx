import "./shared-styles.css";
import classNames from "classnames";
import React from "react";
import { BoxComponent, BuilderProps } from "./global";

/**
 * Build a standardized component, providing shared functionalities and props, to optimize the process.
 *
 * @param name
 * @param Component
 * @param commonProps
 * @param additionalProps
 * @param wrapper
 *
 * @returns built component, ready to be rendered
 * 
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
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

/**
 * Build a standardized component, decorating it with some functionalitis (like top label or dynamic value update).
 *
 * @param value actual component value
 * @param defaultValue default value (used when no value is set)
 * @param {string} label component top label
 * @param callback a function that returns an Object containing Component Builder props, properly formatted
 *
 * @returns built component, ready to be rendered, enhanced with some functionalities (like the top label)
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
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
