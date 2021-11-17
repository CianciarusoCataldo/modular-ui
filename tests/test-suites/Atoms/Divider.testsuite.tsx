import React from "react";
import { shallow } from "enzyme";
import Divider from "../../../src/components/atoms/Divider";

test("rendered without errors", () => {
  const wrapper = shallow(<Divider />);
  expect(wrapper);
});
