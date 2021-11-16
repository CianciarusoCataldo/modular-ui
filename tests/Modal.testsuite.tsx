import React from "react";
import { shallow } from "enzyme";
import Modal from "../src/components/molecules/Modal";

const tests = () =>
  describe("\n    Modal", () => {
    test("rendered without errors", () => {
      let wrapper = shallow(<Modal />);
      expect(wrapper);
      wrapper = shallow(
        <Modal isVisible={true} Content={<p>Testing modal</p>} />
      );
      expect(wrapper);
    });
  });

export default tests;
