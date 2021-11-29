import React from "react";
import { shallow } from "enzyme";
import Header from "../../../src/components/molecules/Header";

test("rendered without errors", () => {
  let wrapper = shallow(<Header children={<div>Testing Header</div>} />);
  expect(wrapper);
});

test("rendered without errors - no parameters", () => {
  let wrapper = shallow(<Header />);
  expect(wrapper);
});
