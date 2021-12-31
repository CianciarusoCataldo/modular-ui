import React from "react";
import { stub } from "sinon";
import { mount, shallow } from "enzyme";
import { Button } from "../../../src";
import { describeTest } from "../../core/utils/helpers";

const clickStub = stub();

test("rendered without errors - no parameters", () => {
  let wrapper = shallow(
    <Button>
      <p>Testing button</p>
    </Button>
  );
  expect(wrapper);
});

describeTest("click", () => {
  test("when Button is enabled, clicking on the Button will trigger onClick callback", () => {
    const wrapper = mount(
      <Button onClick={clickStub}>
        <p>Testing button</p>
      </Button>
    );
    wrapper.find("button").simulate("click");
    expect(clickStub).toBeCalled;
  });

  test("when Button is disabled, clicking on the Button won't trigger onClick callback", () => {
    const wrapper = mount(
      <Button onClick={() => {}} disabled unstyled>
        <p>Testing button</p>
      </Button>
    );
    wrapper.find("button").simulate("click");
    expect(wrapper);
  });
});
