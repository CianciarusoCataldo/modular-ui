import React from "react";
import { shallow } from "enzyme";
import Divider from "../src/components/atoms/Divider";

const tests = () =>
  describe("\n    Divider", () => {
    test("rendered without errors", () => {
      const wrapper = shallow(<Divider />);
      expect(wrapper);
    });
  });

export default tests;
