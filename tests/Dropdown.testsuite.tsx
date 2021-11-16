import React from "react";
import { mount, shallow } from "enzyme";
import { stub } from "sinon";
import Dropdown from "../src/components/molecules/Dropdown";

const tests = () =>
  describe("\n    Dropdown", () => {
    const elementStub = stub();
    test("rendered without errors", () => {
      let wrapper = shallow(
        <Dropdown
          defaultValue="Testing Dropdown"
          content={[{ name: "element 1", action: elementStub }]}
        />
      );
      expect(wrapper);
    });

    test("rendered without errors - no parameters", () => {
      const wrapper = shallow(<Dropdown />);
      expect(wrapper);
    });

    test("Clicking on  Dropdown element will trigger its action callback", () => {
      let wrapper = mount(
        <Dropdown
          defaultValue="Testing Dropdown"
          content={[{ name: "element 1", action: elementStub }]}
        />
      );
      wrapper.find('button[data-id="options-menu"]').simulate("click");
      wrapper.find('button[data-id="dropdown_option_0"]').simulate("click");
      expect(elementStub).toBeCalled;
    });
  });

export default tests;
