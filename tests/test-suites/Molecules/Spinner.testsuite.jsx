import React from "react";
import { mount } from "enzyme";

import { renderingTest } from "../../core/utils/helpers";

import { Spinner } from "../../../src";

renderingTest(
  Spinner,
  {
    value: "success",
  },
  true
);

test("with a non valid status", () => {
  /* eslint-disable */
  const wrapper = mount(<Spinner value="non-valid-state" />);
  expect(wrapper);
});
