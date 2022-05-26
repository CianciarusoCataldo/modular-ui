import { BoxComponent, CommonProps } from "../../../utils/global";

/** Spinner component props */
export type SpinnerProps = CommonProps &
  BoxComponent<"success" | "error" | "loading">;
