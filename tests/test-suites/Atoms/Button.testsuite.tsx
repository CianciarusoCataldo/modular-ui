import React from "react";
import { stub } from "sinon";
import { mount, shallow } from "enzyme";
import { Button } from "../../../src";
import { describeTest } from "../../core/utils/helpers";

const clickStub = stub();

test("rendered without errors", () => {
  let wrapper = shallow(
    <Button>
      <p>Testing button</p>
    </Button>
  );
  expect(wrapper);
  wrapper = mount(
    <Button hide>
      <p>Testing button</p>
    </Button>
  );
  expect(wrapper);
});

describeTest("click", () => {
  test("when Button is enabled", () => {
    const wrapper = mount(
      <Button onClick={clickStub}>
        <p>Testing button</p>
      </Button>
    );
    wrapper.find("button").simulate("click");
    expect(clickStub).toBeCalled;
  });
  test("when Button is disabled", () => {
    const wrapper = mount(
      <Button onClick={() => {}} disabled unstyled>
        <p>Testing button</p>
      </Button>
    );
    wrapper.find("button").simulate("click");
    expect(wrapper);
  });
});
