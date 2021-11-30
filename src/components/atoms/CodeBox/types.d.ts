import { CommonProps } from "../../../global";

export type CodeBoxProps = CommonProps & {
  code?: string;
  enhanced?: boolean;
};
