import React from "react";
import { mount, shallow } from "enzyme";
import { stub } from "sinon";
import { Form } from "../../../src";

const submitStub = stub();
test("rendered without errors - no parameters", () => {
  let wrapper = shallow(<Form />);
  expect(wrapper);
});

test("rendered without errors", () => {
  let wrapper = mount(
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

  wrapper.find('button[data-id="form-submit-button"]').simulate("click");

  expect(wrapper);

  wrapper = mount(
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
    .simulate("change", { target: { value: "Hello" } });
  wrapper
    .find('div[data-id="form-field-1"] input')
    .simulate("change", { target: { value: "Hello" } });
  wrapper.find('button[data-id="form-submit-button"]').simulate("click");
  expect(submitStub).toBeCalled;
});
