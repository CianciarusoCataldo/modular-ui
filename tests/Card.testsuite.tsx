import React from "react";
import { shallow } from "enzyme";
import Card from "../src/components/molecules/Card";

const tests = () =>
  describe("\n    Card", () => {
    test("rendered without errors", () => {
      let wrapper = shallow(<Card title="Testing Card" />);
      expect(wrapper);
      wrapper = shallow(
        <Card
          title="Testing Card"
          titleClassName="testing-class"
          headerClassName="testing-class"
          bodyClassName="testing-class"
          footerClassName="testing-class"
        />
      );
      expect(wrapper);
    });
  });

export default tests;
