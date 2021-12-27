import React from "react";
import { shallow } from "enzyme";
import { Card } from "../../../src";

test("rendered without errors", () => {
  let wrapper = shallow(<Card />);
  expect(wrapper);
});

test("rendered without errors - no parameters", () => {
  let wrapper = shallow(
    <Card
      label="Testing Card"
      header="Testing header"
      body="Testing body"
      footer="Testing footer"
    />
  );
  expect(wrapper);
});
