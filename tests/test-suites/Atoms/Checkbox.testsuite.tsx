import React from "react";
import { mount } from "enzyme";
import Sinon from "sinon";
import { Checkbox } from "../../../src";

const onChangeStub = Sinon.stub();

test("rendered without errors - no params", () => {
  const wrapper = mount(<Checkbox />);
  wrapper.find("#modular-checkbox").simulate("click");
  expect(onChangeStub).not.toBeCalled;
});

test("rendered without errors", () => {
  const wrapper = mount(
    <Checkbox value={true} onChange={onChangeStub} onClick={onChangeStub} />
  );
  wrapper.find("#modular-checkbox").simulate("click");
  expect(onChangeStub).toBeCalled;
});
