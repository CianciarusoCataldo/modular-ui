import {
  BoxComponent,
  CommonProps,
  ModularComponent,
} from "../../../utils/global";

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

/**
 * Modular-ui CodeBox component
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/atoms/CodeBox
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type CodeBoxProps = CommonProps &
  Omit<BoxComponent<string>, "icon"> & {
    /** Enable/disable advanced mode, to access extra features, like the integrated copy button and text highlight */
    enhanced?: boolean;

    /** Environment for text highlight feature, default to "terminal" (only enabled into enhanced mode) */
    environment?: SupportedEnvironment | undefined;
  };

/**
 * Modular-ui CodeBox component
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/atoms/CodeBox
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type CodeBoxComponent = ModularComponent<CodeBoxProps>;
