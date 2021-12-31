import { Page } from "../../../src";
import { renderingTest } from "../../core/utils/helpers";

renderingTest(Page, {
  orientation: "horizontal",
  children: "Page content",
});
