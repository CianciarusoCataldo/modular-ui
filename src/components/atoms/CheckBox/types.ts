import {
  CommonProps,
  ComponentWithCallback,
  BoxComponent,
  ModularComponent,
} from "../../../utils/global";

/**
 * [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) CheckBox component props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/atoms/CheckBox
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type CheckBoxProps = CommonProps &
  BoxComponent<boolean> &
  ComponentWithCallback<boolean>;

/**
 * [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) CheckBox component
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/atoms/CheckBox
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type CheckBoxComponent = ModularComponent<CheckBoxProps>;
