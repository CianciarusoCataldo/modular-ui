import React from "react";
import { mount } from "enzyme";
import Sinon from "sinon";
import { CheckBox } from "../../../src";

const onChangeStub = Sinon.stub();

test("rendered without errors - no params", () => {
  const wrapper = mount(<CheckBox />);
  wrapper.find("#modular-checkbox .container").simulate("click");
  expect(onChangeStub).not.toBeCalled;
});

test("rendered without errors", () => {
  const wrapper = mount(
    <CheckBox value={true} onChange={onChangeStub} onClick={onChangeStub} />
  );
  wrapper.find("#modular-checkbox .container").simulate("click");
  expect(onChangeStub).toBeCalled;
});
