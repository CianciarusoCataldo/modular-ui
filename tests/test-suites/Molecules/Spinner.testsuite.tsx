import React from "react";
import { mount } from "enzyme";

import { renderingTest } from "../../core/utils/helpers";

import { Spinner } from "../../../src";
import { SpinnerComponent } from "../../../src/components/molecules/Spinner/types";

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
  expect(wrapper.find("[data-id='loading-icon']").length > 0);
});

test("with custom states", () => {
  const CustomSpinner: SpinnerComponent<{ custom: JSX.Element }> = Spinner;
  /* eslint-disable */
  const wrapper = mount(
    <CustomSpinner
      value="custom"
      statuses={{ custom: <div data-id="test-img" /> }}
    />
  );
  expect(wrapper.find("[data-id='test-img']").length > 0);
});
