import React from "react";
import { mount, shallow } from "enzyme";
import Table from "../../../src/components/molecules/Table";

test("rendered without errors - no params", () => {
  let wrapper = shallow(<Table />);
  expect(wrapper);
});

test("rendered without errors", () => {
  let wrapper = mount(
    <Table
      rows={[
        ["header 1", "header 2"],
        ["element 1", "element 2"],
      ]}
      headers
    />
  );
  expect(wrapper);
});
