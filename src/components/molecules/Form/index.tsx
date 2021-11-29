import "./styles.css";

import React from "react";
import classNames from "classnames";

import { FormProps } from "./types";
import { wrapComponent } from "../Wrapper";

/**
 *
 * @param title Form title
 * @param fields Form fields array
 * @param onSubmit callback triggered on Form submit
 * @param className custom classname applied on Form component
 * @param submitLabel custom submit button label
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Form = ({
  title,
  fields,
  onSubmit,
  className,
  submitLabel,
  hide,
}: FormProps) => {
  const [values, setValues] = React.useState<Record<string, string>>({});
  const [errors, setErrors] = React.useState<Record<string, boolean>>({});
  let canSubmit =
    Object.keys(errors).length > 1
      ? !Object.values(errors).find((element) => element === true) || false
      : false;

  return wrapComponent(
    <div id="modular-form" className={className}>
      <p className="title">{title}</p>
      {fields &&
        fields.map((field, index) => {
          const name = field.name;
          return (
            <div className="field" key={`form_field_${index}`}>
              <p className="header">{field.header}</p>
              <input
                value={values[name] || ""}
                type="text"
                data-id={`form-field-${index}`}
                placeholder={field.placeholder}
                onChange={(e) => {
                  let tmpValues = { ...values };
                  let tmpErrors = { ...errors };
                  tmpValues[name] = e.target.value;
                  if (e.target.value.length < 1 && field.required) {
                    tmpErrors[name] = true;
                  } else {
                    tmpErrors[name] = field.validate
                      ? !field.validate(e.target.value)
                      : false;
                  }
                  setErrors(tmpErrors);
                  setValues(tmpValues);
                }}
                className={classNames("input", {
                  error: errors[name],
                  "no-error": !errors[name],
                })}
              />
              <div className="error-box">
                {errors[name] && <p className="error-label">{field.error}</p>}
              </div>
            </div>
          );
        })}
      <button
        disabled={!canSubmit}
        data-id="form-submit-button"
        onClick={() => {
          let results = { ...values };
          onSubmit && onSubmit(results);
        }}
        className={classNames("submit", {
          allowed: canSubmit,
          "not-allowed": !canSubmit,
        })}
      >
        {submitLabel}
      </button>
    </div>,
    hide
  );
};

export default Form;
