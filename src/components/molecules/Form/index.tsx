import "./styles.css";

import React from "react";
import classNames from "classnames";

import { FormProps } from "./types";

import { buildBoxComponent } from "../../../utils";

import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

/**
 *
 * @param {string} title Form title
 * @param {Record<string, { header?: string; required?: boolean; placeholder?: string; error?: string; validate?: (value: string) => boolean;}>} fields Form fields array
 * @param {(values: Record<string, string>) => void} onSubmit callback triggered on Form submit
 * @param {string} submitLabel custom submit button label
 * @param {string} className `common modular-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common modular-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common modular-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common modular-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common modular-ui prop` - Hide/show component
 * @param {boolean} shadow `common modular-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 *@example <caption>Example Form usage</caption>
 *import { render } from "react-dom";
 *import { Field } from '@cianciarusocataldo/modular-ui';
 *
 * render(<Form fields={{ "Field 0": { header:"FIeld 0 header" } }} />, document.getElementById("root"));
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Form = ({
  title,
  fields,
  onSubmit,
  submitLabel,
  label,
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

  return buildBoxComponent({
    callBack: () => ({
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
    }),
    label,
  });
};

export default Form;
