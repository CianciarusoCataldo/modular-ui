import React from "react";
import { mount, shallow } from "enzyme";
import { stub } from "sinon";
import { Counter, Input } from "../../../src";

const onChangeStub = stub();

test("rendered without errors - no params", () => {
  const wrapper = shallow(<Counter />);
  wrapper.find("input").simulate("change", { target: { value: "0" } });
  expect(onChangeStub).not.toBeCalled;
});

test("rendered without errors", () => {
  let wrapper = mount(<Counter onChange={onChangeStub} />);
  wrapper.find("input").simulate("change", { target: { value: null } });
  expect(onChangeStub).toBeCalled;

  wrapper = mount(<Counter value={0} onChange={onChangeStub} />);
  wrapper
    .find("input")
    .simulate("change", { target: { value: "12" } });
  expect(onChangeStub).toBeCalled;
});
