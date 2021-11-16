import React from "react";
import { stub } from "sinon";
import { mount, shallow } from "enzyme";
import Button from "../src/components/atoms/Button";

const tests = () => {
  describe("\n    Button", () => {
    const clickStub = stub();

    test("rendered without errors", () => {
      const wrapper = shallow(<Button>Testing button</Button>);
      expect(wrapper);
    });

    describe("Button click", () => {
      test("when Button is enabled", () => {
        const wrapper = mount(
          <Button onClick={clickStub}>Testing button</Button>
        );
        wrapper.find("button").simulate("click");
        expect(clickStub).toBeCalled;
      });
      test("when Button is disabled", () => {
        const wrapper = mount(
          <Button onClick={() => {}} disabled noStyles>
            Testing button
          </Button>
        );
        wrapper.find("button").simulate("click");
        expect(wrapper);
      });
    });
  });
};

export default tests;
