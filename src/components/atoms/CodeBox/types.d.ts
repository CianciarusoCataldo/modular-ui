import { CommonProps } from "../../../global";

export type SupportedEnvironment =
  | "javascript"
  | "python"
  | "terminal"
  | "common";

export type SplittedCode<T = string | null> = {
  color: T;
  code: string;
};

export type CodeBoxProps = CommonProps & {
  /** Code to display */
  code?: string;

  /** Enable/disable advanced mode, to access extra features, like the integrated copy button and text highlight */
  enhanced?: boolean;

  /** Environment for text highlight feature, default to "terminal" (only enabled into enhanced mode) */
  environment?: SupportedEnvironment | undefined;
};
