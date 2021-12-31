import React from "react";
import { mount } from "enzyme";

import { describeTest, renderingTest } from "../../core/utils/helpers";

import { Form } from "../../../src";

renderingTest(Form, {
  fields: {
    field1: {
      placeholder: "Field 1 placeholder",
      required: false,
      header: "Field 1 header",
      error: "Custom error label",
      validate: (value: string) => {
        return value.includes("s");
      },
    },
    field2: {
      placeholder: "Field 2 placeholder",
      required: true,
      header: "Field 2 header",
    },
  },
  submitLabel: "Submit test button",
  onSubmit: () => {},
});

describeTest("submit click test", () => {
  test("without onSubmit callback", () => {
    const wrapper = mount(
      <Form
        fields={{
          field1: {
            placeholder: "Field 1 placeholder",
            required: false,
            header: "Field 1 header",
            error: "Custom error label",
            validate: (value: string) => {
              return value.includes("s");
            },
          },
          field2: {
            placeholder: "Field 2 placeholder",
            required: true,
            header: "Field 2 header",
          },
        }}
        submitLabel="Submit"
      />
    );
    wrapper
      .find('div[data-id="form-field-0"] input')
      .simulate("change", { target: { value: "aaas" } });
    wrapper
      .find('div[data-id="form-field-1"] input')
      .simulate("change", { target: { value: "" } });
    wrapper
      .find('div[data-id="form-field-1"] input')
      .simulate("change", { target: { value: "aaaaa" } });

    wrapper.find('div[data-id="form-submit-button"] button').simulate("click");

    expect(wrapper);
  });

  test("with onSubmit callback, it will be called with a dictionary that includes every field input value", () => {
    const submitStub = jest.fn();

    const wrapper = mount(
      <Form
        fields={{
          "Field 1": {
            header: "Field 1 - header",
            required: false,
            placeholder: "placeholder",
            error: "error",
            validate: () => true,
          },
          "Field 2": {
            header: "Field 2 - header",
            required: true,
            placeholder: "placeholder-2",
            error: "error-2",
          },
        }}
        onSubmit={submitStub}
        submitLabel="Submit"
      />
    );
    wrapper
      .find('div[data-id="form-field-0"] input')
      .simulate("change", { target: { value: "test input 1" } });
    wrapper
      .find('div[data-id="form-field-1"] input')
      .simulate("change", { target: { value: "test input 2" } });
    wrapper.find('div[data-id="form-submit-button"] button').simulate("click");
    expect(submitStub).toBeCalledWith({
      "Field 1": "test input 1",
      "Field 2": "test input 2",
    });
  });
});
