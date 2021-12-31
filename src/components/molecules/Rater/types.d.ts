import {
  BoxComponent,
  CommonProps,
  ComponentWithCallback,
} from "../../../utils/global";

/** Rater component props */
export type RaterProps = CommonProps &
  BoxComponent<
    number,
    { FULL: JSX.Element | Element; EMPTY: JSX.Element | Element }
  > &
  ComponentWithCallback<number> & {
    /** If true, vote icons will be showed vertically (instead of default setting, horizontal) */
    vertical?: boolean;

    /** max vote (max number of icons showed) */
    max?: number;

    /** vote icons type */
    type?: "star" | "circle";
  };
