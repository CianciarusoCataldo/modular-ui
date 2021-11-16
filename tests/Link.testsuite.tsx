import React from "react";
import { shallow } from "enzyme";
import Link from "../src/components/atoms/Link";

const tests = () =>
  describe("\n    Link", () => {
    test("rendered without errors", () => {
      const wrapper = shallow(<Link label="Testing Link" />);
      expect(wrapper);
    });
  });

export default tests;
