import {
  BoxComponent,
  BuilderComponent,
  CommonProps,
  ComponentWithCallback,
  ModularComponent,
} from "../../../utils/global";

/**
 * Modular-ui Toggle component props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/atoms/Toggle
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type ToggleProps = CommonProps &
  BoxComponent<boolean> &
  ComponentWithCallback<boolean> & {
    offIcon?: BuilderComponent;
    onIcon?: BuilderComponent;
  };

/**
 * Modular-ui Toggle component
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/atoms/Toggle
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type ToggleComponent = ModularComponent<ToggleProps>;
