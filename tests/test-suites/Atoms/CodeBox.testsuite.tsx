import React from "react";
import { mount, shallow } from "enzyme";
import Sinon from "sinon";

import { CodeBox } from "../../../src";
import { describeTest } from "../../core/utils/helpers";

test("rendered without errors - no params", () => {
  const wrapper = shallow(<CodeBox />);
  expect(wrapper);
});

test("rendered without errors", () => {
  const wrapper = mount(
    <CodeBox environment="python" value="pip i panda 'string'" enhanced />,
    {
      context: { navigator: { writeText: () => {} } },
    }
  );
  wrapper.find("button").simulate("click");
  expect(wrapper);
});

describeTest("Advanced features", () => {
  const copyStub = Sinon.stub();

  test("Clicking on copy button will copy the actual code to the clipboard", () => {
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
    wrapper.find(".copy-icon").simulate("click");
    expect(copyStub).toBeCalled;
  });
});
