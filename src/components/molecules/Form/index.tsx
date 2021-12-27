import "./styles.css";

import React from "react";
import classNames from "classnames";

import { FormProps } from "./types";
import { buildComponent } from "../../../utils";
import { Button, Input } from "../../../";

/**
 *
 * @param title Form title
 * @param fields Form fields array
 * @param onSubmit callback triggered on Form submit
 * @param submitLabel custom submit button label
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Form = ({
  title,
  fields,
  onSubmit,
  submitLabel,
  ...commonProps
}: FormProps) => {
  const dropdownFields: Record<string, string> = fields
    ? Object.keys(fields).reduce((o, key) => ({ ...o, [key]: "" }), {})
    : {};

  const fieldErrors: Record<string, boolean> = Object.keys(
    dropdownFields
  ).reduce(
    (o, element) => ({
      ...o,
      [element]:
        fields[element].required ||
        (fields[element].validate && !fields[element].validate("")) ||
        false,
    }),
    {}
  );

  const [values, setValues] =
    React.useState<Record<string, string>>(dropdownFields);

  const [errors, setErrors] =
    React.useState<Record<string, boolean>>(fieldErrors);
  let canSubmit =
    Object.keys(errors).length > 1
      ? !Object.values(errors).find((element) => element === true)
      : true;

  return buildComponent({
    name: "modular-form",
    Component: [
      <p key="form_title" className="title">
        {title}
      </p>,
      ...Object.keys(dropdownFields).map((field, index) => {
        const name = field;
        return (
          <div className="field" key={`form_field_${index}`}>
            <Input
              label={<span className="header">{fields[field].header}</span>}
              value={values[name] || ""}
              id={`form-field-${index}`}
              placeholder={fields[field].placeholder}
              onChange={(value: string) => {
                let tmpValues = { ...values };
                let tmpErrors = { ...errors };
                tmpValues[name] = value;
                if (value.length < 1 && fields[field].required) {
                  tmpErrors[name] = true;
                } else {
                  tmpErrors[name] = fields[field].validate
                    ? !fields[field].validate(value)
                    : false;
                }
                setErrors(tmpErrors);
                setValues(tmpValues);
              }}
              className={classNames({
                "field-error": errors[name],
                "form-input": !errors[name],
              })}
            />
            <div className="error-box">
              {errors[name] && (
                <p className="error-label">{fields[field].error}</p>
              )}
            </div>
          </div>
        );
      }),
      <Button
        disabled={!canSubmit}
        className="submit-button"
        key="form_submit_button"
        id="form-submit-button"
        onClick={() => {
          onSubmit && onSubmit(values);
        }}
      >
        {submitLabel}
      </Button>,
    ],
    commonProps,
  });
};

export default Form;
