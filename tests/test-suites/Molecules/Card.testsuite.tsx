import React from "react";
import { shallow } from "enzyme";
import Card from "../../../src/components/molecules/Card";

test("rendered without errors", () => {
  let wrapper = shallow(<Card title="Testing Card" />);
  expect(wrapper);
  wrapper = shallow(<Card />);
  expect(wrapper);
});

test("rendered without errors - no parameters", () => {
  let wrapper = shallow(<Card title="Testing Card" />);
  expect(wrapper);
  wrapper = shallow(
    <Card
      title="Testing Card"
      titleClassName="testing-class"
      header="Testing header"
      headerClassName="testing-class"
      body="Testing body"
      bodyClassName="testing-class"
      footer="Testing footer"
      footerClassName="testing-class"
    />
  );
  expect(wrapper);
});
