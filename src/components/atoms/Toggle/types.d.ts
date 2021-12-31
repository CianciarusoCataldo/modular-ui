import {
  BoxComponent,
  CommonProps,
  ComponentWithCallback,
} from "../../../utils/global";

/** Toggle component props */
export type ToggleProps = CommonProps &
  BoxComponent<"on" | "off"> &
  ComponentWithCallback<"on" | "off">;
