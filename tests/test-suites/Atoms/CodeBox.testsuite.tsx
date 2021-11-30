import React from "react";
import { mount, shallow } from "enzyme";
import CodeBox from "../../../src/components/atoms/CodeBox";

test("rendered without errors - no params", () => {
  const wrapper = shallow(<CodeBox />);
  expect(wrapper);
});

test("rendered without errors", () => {
  const wrapper = mount(<CodeBox code="npm i" enhanced />, {
    context: { navigator: { writeText: () => {} } },
  });
  wrapper.find("button").simulate("click");
  expect(wrapper);
});
