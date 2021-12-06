import React from "react";
import { mount, shallow } from "enzyme";
import { stub } from "sinon";
import Input from "../../../src/components/atoms/Input";

const onChangeStub = stub();

test("rendered without errors - no params", () => {
  const wrapper = shallow(<Input />);
  wrapper.find("input").simulate("change", { target: { value: "" } });
  expect(onChangeStub).not.toBeCalled;
});

test("rendered without errors", () => {
  let wrapper = mount(<Input onChange={onChangeStub} />);
  wrapper.find("input").simulate("change", { target: { value: "" } });
  expect(onChangeStub).toBeCalled;

  wrapper = mount(<Input value="" onChange={onChangeStub} />);
  wrapper.find("input").simulate("change", { target: { value: "" } });
  expect(onChangeStub).toBeCalled;

  wrapper = mount(<Input numeric value={0} onChange={onChangeStub} />);
  wrapper.find("input").simulate("change", { target: { value: 0 } });
  expect(onChangeStub).toBeCalled;
});