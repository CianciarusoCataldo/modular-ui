import React from "react";
import { mount } from "enzyme";

import { describeTest, renderingTest } from "../../core/utils/helpers";

import { CodeBox } from "../../../src";

renderingTest(CodeBox, {
  environment: "python",
  value: "pip i 'panda'",
  enhanced: true,
});

describeTest("advanced features", () => {
  const copyStub = jest.fn();

  test("clicking on copy button will copy the actual code to the clipboard", () => {
    const wrapper = mount(
      <CodeBox
        environment="javascript"
        value='import { Card, Dropdown } from "@cianciarusocataldo/modular-ui"'
        enhanced
      />,
      {
        context: { navigator: { writeText: copyStub } },
      }
    );
    wrapper.find(".copy-icon button").simulate("click");
    expect(copyStub).toBeCalled;
  });
});
