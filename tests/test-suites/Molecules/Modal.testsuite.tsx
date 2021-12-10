import React from "react";
import { shallow } from "enzyme";
import { Modal } from "../../../src";

test("rendered without errors", () => {
  let wrapper = shallow(<Modal />);
  expect(wrapper);
  wrapper = shallow(<Modal hide={true} children={<p>Testing modal</p>} />);
  expect(wrapper);
  wrapper = shallow(<Modal hide={false} children={<p>Testing modal</p>} />);
  expect(wrapper);
});
