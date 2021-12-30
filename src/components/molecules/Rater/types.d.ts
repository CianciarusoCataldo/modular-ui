import {
  BoxComponent,
  CommonProps,
  ComponentWithCallback,
} from "../../../utils/global";

export type SupportedVoteType = "star" | "circle";

export type RaterProps = CommonProps &
  BoxComponent<
    number,
    { FULL: JSX.Element | Element; EMPTY: JSX.Element | Element }
  > &
  ComponentWithCallback<number> & {
    vertical?: boolean;
    max?: number;
    type?: SupportedVoteType;
  };
