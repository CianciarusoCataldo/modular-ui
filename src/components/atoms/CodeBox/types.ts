import { BoxComponent, CommonProps } from "../../../utils/global";

/** Supported environments */
export type SupportedEnvironment =
  | "javascript"
  | "python"
  | "terminal"
  | "common";

/** Partial code block */
export interface CodeBlock<T = string | null> {
  /** Highlight color */
  color: T;

  /** Code block */
  code: string;
}

/** CodeBox component props */
export type CodeBoxProps = CommonProps &
  Omit<BoxComponent<string>, "icon"> & {
    /** Enable/disable advanced mode, to access extra features, like the integrated copy button and text highlight */
    enhanced?: boolean;

    /** Environment for text highlight feature, default to "terminal" (only enabled into enhanced mode) */
    environment?: SupportedEnvironment | undefined;
  };
