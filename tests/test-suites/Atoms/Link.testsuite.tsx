import React from "react";
import { shallow } from "enzyme";
import Link from "../../../src/components/atoms/Link";

test("rendered without errors", () => {
  let wrapper = shallow(<Link to="" children="Testing Link" />);
  expect(wrapper);
  wrapper = shallow(<Link to="" children="Testing Link" newTab />);
  expect(wrapper);
});
