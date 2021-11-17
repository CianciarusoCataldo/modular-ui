import React from "react";
import { shallow } from "enzyme";
import Page from "../../../src/components/molecules/Page";

test("rendered without errors", () => {
  let wrapper = shallow(<Page />);
  expect(wrapper);
  wrapper = shallow(<Page orientation="horizontal" />);
  expect(wrapper);
});
