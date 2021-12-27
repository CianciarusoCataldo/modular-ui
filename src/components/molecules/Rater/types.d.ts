import { BoxComponent, CommonProps } from "../../../utils/global";

export type SupportedVoteType = "star" | "circle";

export type RaterProps = CommonProps &
  BoxComponent<number> & {
    vertical?: boolean;
    max?: number;
    type?: SupportedVoteType;
    customIcon?: { FULL: JSX.Element | Element; EMPTY: JSX.Element | Element };
  };
