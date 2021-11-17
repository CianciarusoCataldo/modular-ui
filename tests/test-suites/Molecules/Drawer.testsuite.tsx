import React from "react";
import { mount, shallow } from "enzyme";
import { stub } from "sinon";
import Drawer from "../../../src/components/molecules/Drawer";

const elementStub = stub();
test("rendered without errors", () => {
  let wrapper = mount(
    <Drawer
      onClose={() => {}}
      isOpen={true}
      elements={[
        { text: "Testing element 1", actionCallback: elementStub },
        { text: "Testing element 2", isActiveCallback: () => true },
      ]}
    />
  );

  wrapper.find('button[data-id="drawer_button_0"]').simulate("click");
  expect(elementStub).toBeCalled;
});

test("rendered without errors - no parameters", () => {
  const wrapper = shallow(<Drawer />);
  expect(wrapper);
});
