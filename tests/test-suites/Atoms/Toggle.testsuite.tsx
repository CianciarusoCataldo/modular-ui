import React from "react";
import { mount } from "enzyme";

import { describeTest, renderingTest } from "../../core/utils/helpers";

import { Toggle } from "../../../src";

renderingTest(Toggle, { value: true, onChange: () => {} });

describeTest("click test", () => {
  const onChangeStub = jest.fn();

  test("onChange callback is triggered", () => {
    const wrapper = mount(<Toggle value={false} onChange={onChangeStub} />);
    wrapper.find(".container").simulate("click");
    expect(onChangeStub).toBeCalledWith(true);
  });
});
