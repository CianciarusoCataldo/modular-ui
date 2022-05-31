import {
  BoxComponent,
  CommonProps,
  ComponentWithCallback,
  GenericInputComponent,
  ModularComponent,
} from "../../../utils/global";

/**
 * [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) Input component props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/atoms/Input
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */export type InputProps<T = any> = CommonProps &
  GenericInputComponent &
  Omit<BoxComponent<string>, "icon"> &
  ComponentWithCallback;

/**
 * [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) Input component
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/atoms/Input
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type InputComponent = ModularComponent<InputProps>;
