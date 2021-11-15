import "./styles.css";

import React from "react";
import classNames from "classnames";

import { FormProps } from "./types";

/**
 *
 * @param param0
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Form = ({
  title,
  fields,
  onSubmit,
  className,
  submitLabel,
}: FormProps) => {
  const [values, setValues] = React.useState<Record<string, string>>({});
  const [errors, setErrors] = React.useState<Record<string, boolean>>({});
  let canSubmit =
    Object.keys(errors).length > 1
      ? !Object.values(errors).find((element) => element === true) || false
      : false;

  return (
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
        onClick={() => {
          let results = { ...values };
          let keys = Object.keys(results);
          fields &&
            fields.forEach((field) => {
              if (!keys.includes(field.name)) {
                let name = field.name;
                results[name] = "";
              }
            });
          onSubmit && onSubmit(results);
        }}
        className={classNames("submit", {
          allowed: canSubmit,
          "not-allowed": !canSubmit,
        })}
      >
        {submitLabel}
      </button>
    </div>
  );
};

export default Form;
