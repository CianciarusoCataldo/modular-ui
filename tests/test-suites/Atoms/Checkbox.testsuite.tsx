import React from "react";
import { mount, shallow } from "enzyme";
import { stub } from "sinon";
import Checkbox from "../../../src/components/atoms/Checkbox";

const onChangeStub = stub();

test("rendered without errors - no params", () => {
  const wrapper = shallow(<Checkbox />);
  wrapper.find("input").simulate("change");
  expect(onChangeStub).not.toBeCalled;
});

test("rendered without errors", () => {
  const wrapper = mount(<Checkbox value={true} onChange={onChangeStub} />);
  wrapper.find("input").simulate("change");
  expect(onChangeStub).toBeCalled;
});
