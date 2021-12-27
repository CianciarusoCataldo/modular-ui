import React from "react";
import { mount, shallow } from "enzyme";
import { Carousel } from "../../../src";

test("rendered without errors", () => {
  let wrapper = mount(<Carousel elements={["elem1", "elem2", "elem3"]} />);
  expect(wrapper);
  wrapper.find('div[data-id="dot_1"] button').simulate("click");
  wrapper.find('div[data-id="dot_0"] button').simulate("click");
  wrapper.find('div[data-id="right_arrow"] button').simulate("click");
  wrapper.find('div[data-id="left_arrow"] button').simulate("click");
  expect(wrapper);
});

test("rendered without errors - no parameters", () => {
  let wrapper = shallow(<Carousel />);
  expect(wrapper);
});
