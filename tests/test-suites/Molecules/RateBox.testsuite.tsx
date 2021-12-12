import React from "react";
import Sinon from "sinon";
import { mount } from "enzyme";
import { RateBox } from "../../../src";

const clickStub = Sinon.stub();

test("rendered without errors - no params", () => {
  let wrapper = mount(<RateBox />);
  expect(wrapper);
});

test("rendered without errors", () => {
  let wrapper = mount(
    <RateBox value={3} maxVote={6} onClick={clickStub} onChange={clickStub} />
  );
  wrapper.find('div[data-id="vote_1"] button').simulate("click");
  wrapper.find('div[data-id="vote_4"] button').simulate("mouseenter");
  wrapper.find('div[data-id="vote_4"] button').simulate("mouseleave");
  expect(clickStub).toBeCalled;
  wrapper = mount(<RateBox value={7} maxVote={6} />);
  expect(wrapper);
});
