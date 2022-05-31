import {
  BoxComponent,
  CommonProps,
  ComponentWithCallback,
  GenericInputComponent,
  ModularComponent,
} from "../../../utils/global";

/**
 * Modular-ui Counter component props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/atoms/Counter
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type CounterProps = CommonProps &
  GenericInputComponent &
  Omit<BoxComponent<number>, "icon"> &
  ComponentWithCallback<number>;

/**
 *  Modular-ui Counter component
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/atoms/Counter
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type CounterComponent = ModularComponent<CounterProps>;
