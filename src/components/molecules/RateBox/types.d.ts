import { BoxComponent, CommonProps } from "../../../global";

export type SupportedVoteType = "star" | "circle";

export type RateBoxProps = CommonProps &
  BoxComponent<number> & {
    maxVote?: number;
    type?: SupportedVoteType;
  };
