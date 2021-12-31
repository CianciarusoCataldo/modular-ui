import React from "react";
import { mount } from "enzyme";

import { describeTest, renderingTest } from "../../core/utils/helpers";

import { Drawer } from "../../../src";

renderingTest(Drawer, {
  onClose: () => {},
  hide: false,
  elements: [
    { text: "Testing element 1", actionCallback: () => {} },
    { text: "Testing element 2", isActiveCallback: () => true },
  ],
});

describeTest("click test", () => {
  const elementStub = jest.fn();
  const onCloseStub = jest.fn();

  test("onClose callback", () => {
    let wrapper = mount(
      <Drawer
        onClose={onCloseStub}
        hide={false}
        elements={[
          { text: "Testing element 1", actionCallback: () => {} },
          { text: "Testing element 2", isActiveCallback: () => true },
        ]}
      />
    );

    wrapper.find('button[data-id="drawer_close_button"]').simulate("click");
    expect(onCloseStub).toBeCalled;
  });

  test("element callback", () => {
    let wrapper = mount(
      <Drawer
        onClose={() => {}}
        hide={false}
        elements={[
          { text: "Testing element 1", actionCallback: elementStub },
          { text: "Testing element 2", isActiveCallback: () => true },
        ]}
      />
    );

    wrapper.find('div[data-id="drawer_button_0"] button').simulate("click");
    expect(elementStub).toBeCalled;
  });
});
