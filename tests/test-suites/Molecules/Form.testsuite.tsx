import React from "react";
import { mount, shallow } from "enzyme";
import { stub } from "sinon";
import Form from "../../../src/components/molecules/Form";

const submitStub = stub();
test("rendered without errors - no parameters", () => {
  let wrapper = shallow(<Form />);
  expect(wrapper);
});

test("rendered without errors", () => {
  let wrapper = mount(
    <Form
      fields={[
        {
          name: "Field 1",
          header: "Field 1 - header",
          required: false,
          placeholder: "placeholder",
          error: "error",
          validate: () => true,
        },
        {
          name: "Field 2",
          header: "Field 2 - header",
          required: true,
          placeholder: "placeholder-2",
          error: "error-2",
        },
      ]}
      submitLabel="Submit"
    />
  );
  wrapper
    .find('input[data-id="form-field-0"]')
    .simulate("change", { target: { value: "" } });
  wrapper
    .find('input[data-id="form-field-1"]')
    .simulate("change", { target: { value: "" } });
  wrapper.find('button[data-id="form-submit-button"]').simulate("click");

  wrapper
    .find('input[data-id="form-field-0"]')
    .simulate("change", { target: { value: "Hello" } });
  wrapper
    .find('input[data-id="form-field-1"]')
    .simulate("change", { target: { value: "Hello" } });
  wrapper.find('button[data-id="form-submit-button"]').simulate("click");

  expect(wrapper);

  wrapper = mount(
    <Form
      fields={[
        {
          name: "Field 1",
          header: "Field 1 - header",
          required: false,
          placeholder: "placeholder",
          error: "error",
          validate: () => true,
        },
        {
          name: "Field 2",
          header: "Field 2 - header",
          required: true,
          placeholder: "placeholder-2",
          error: "error-2",
        },
      ]}
      onSubmit={submitStub}
      submitLabel="Submit"
    />
  );
  wrapper
    .find('input[data-id="form-field-0"]')
    .simulate("change", { target: { value: "Hello" } });
  wrapper
    .find('input[data-id="form-field-1"]')
    .simulate("change", { target: { value: "Hello" } });
  wrapper.find('button[data-id="form-submit-button"]').simulate("click");
  expect(submitStub).toBeCalled;
});
