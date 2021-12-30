import React from "react";
import { mount } from "enzyme";
import Sinon from "sinon";
import { Toggle } from "../../../src";

const onChangeStub = Sinon.stub();

test("rendered without errors - no params", () => {
  const wrapper = mount(<Toggle />);
  expect(wrapper);
});

test("rendered without errors", () => {
  const wrapper = mount(<Toggle value="on" onChange={onChangeStub} />);
  wrapper.find(".container").simulate("click");
  expect(onChangeStub).toBeCalled;
});
