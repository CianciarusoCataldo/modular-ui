import {
  BoxComponent,
  CommonProps,
  ModularComponent,
} from "../../../utils/global";

/**
 * [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) Label component props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/atoms/Label
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type LabelProps = Omit<
  BoxComponent<string | string[]>,
  "label" | "icon"
> &
  CommonProps;

/**
 * [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) Label component
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/atoms/Label
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type LabelComponent = ModularComponent<LabelProps>;
