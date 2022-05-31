import { CSSProperties } from "react";

/**
 * Props shared between all [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) components
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/docs/#/guide?id=shared-components-properties
 * */
export interface CommonProps {
  /** custom className applied on main container */
  className?: string;

  /** Enable/disable dark mode */
  dark?: boolean;

  /** Hide/show component */
  hide?: boolean;

  /** `data-id` parameter (for testing purpose, to easily find the component into the DOM) */
  id?: string;

  /** Enable/disable shadow behind component */
  shadow?: boolean;

  /** Css inline properties applied on main container */
  style?: CSSProperties;

  /** If true, no standard modular-ui styles will be applied on the components (useful for example, with image buttons) */
  unstyled?: boolean;
}

/**
 * A standard [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) box component
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/docs/#/guide?id=box-components
 */
export interface BoxComponent<T = any, K = JSX.Element | Element> {
  /** Actual component value */
  value?: T;

  /** Custom component icon */
  icon?: K;

  /** Box component label */
  label?: string | Element | JSX.Element;
}

/**
 * A generic [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) input component, to handle various input content type (like strings or numbers)
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export interface GenericInputComponent<T = string> {
  /** if true, the input content won't be editable */
  readOnly?: boolean;

  /** A label showed when no input is given */
  placeholder?: T;
}

/**
 * A [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) component that provide a callback to handle its content changes
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 *
 */
export interface ComponentWithCallback<T = string> {
  /** Callback triggered when input content changes */
  onChange?: (newValue: T) => void;
}

/**
 * A [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) component with children element
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export interface ComponentWithChildren<T = JSX.Element> {
  /** Component children */
  children?: T;
}

/**
 *  Allowed [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) component type for component builder
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type BuilderComponent = Element | JSX.Element | string;

/** Supported components wrappers */
export type Wrappers = "div" | "a" | "header" | "button" | "footer" | "p";

/**
 * Modular-ui components builder props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type BuilderProps<T = BuilderComponent | BuilderComponent[]> = {
  /** Component name (its DOM id) */
  name: string;

  /** Component to render */
  Component?: T;

  /** Shared props */
  commonProps?: CommonProps;

  /** Additional props applied on main container */
  additionalProps?: any;

  /** Component wrapper (like `div` or `button`, for example) */
  wrapper?: Wrappers;
};

/**
 * A standard [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) component
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type ModularComponent<T = any, K = JSX.Element> = (props: T) => K;
