import {
  BuilderComponent,
  CommonProps,
  ComponentWithChildren,
  ModularComponent,
} from "../../../utils/global";

/**
 * [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) Button component props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/atoms/Button
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 * */
export type ButtonProps = ComponentWithChildren<
  BuilderComponent | BuilderComponent[]
> &
  CommonProps & {
    /** callback triggered when the button is clicked */
    onClick?: () => void;

    /**callback triggered when the cursor enter the component */
    onMouseEnter?: () => void;

    /** callback triggered when the cursor exit the component */
    onMouseLeave?: () => void;

    /**enable or disable the button functionalities (UI will reflect it too) */
    disabled?: boolean;
  };

/**
 * [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) Button component
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/atoms/Button
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type ButtonComponent = ModularComponent<ButtonProps>;
