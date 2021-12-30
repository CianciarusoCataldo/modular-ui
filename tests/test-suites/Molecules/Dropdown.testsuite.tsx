import React from "react";
import { mount, shallow } from "enzyme";
import { stub } from "sinon";
import { Dropdown } from "../../../src";

const onChangeStub = stub();
test("rendered without errors", () => {
  let wrapper = shallow(<Dropdown content={[{ name: "element 1" }]} />);
  expect(wrapper);
});

test("rendered without errors - no parameters", () => {
  const wrapper = shallow(<Dropdown />);
  expect(wrapper);
});

test("Clicking on  Dropdown element will trigger its onChange callback", () => {
  let wrapper = mount(
    <Dropdown content={[{ name: "element 1" }]} onChange={onChangeStub} />
  );
  wrapper.find('button[data-id="options-menu"]').simulate("click");
  wrapper.find('button[data-id="dropdown_option_0"]').simulate("click");
  expect(onChangeStub).toBeCalled;
});
