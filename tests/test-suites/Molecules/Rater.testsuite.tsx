import React from "react";
import Sinon from "sinon";
import { mount } from "enzyme";
import { Rater } from "../../../src";

const clickStub = Sinon.stub();

test("rendered without errors - no params", () => {
  let wrapper = mount(<Rater />);
  expect(wrapper);
});

test("rendered without errors", () => {
  let wrapper = mount(<Rater value={3} max={6} onChange={clickStub} />);
  wrapper.find('div[data-id="vote_1"] button').simulate("click");
  wrapper.find('div[data-id="vote_4"] button').simulate("mouseenter");
  wrapper.find('div[data-id="vote_4"] button').simulate("mouseleave");
  expect(clickStub).toBeCalled;
  wrapper = mount(<Rater value={7} max={6} />);
  expect(wrapper);
});
