import {
  BoxComponent,
  BuilderComponent,
  CommonProps,
  ModularComponent,
} from "../../../utils/global";

/**
 * [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) Spinner component props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Spinner
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type SpinnerProps<T extends string = string> = CommonProps &
  Omit<BoxComponent<T>, "icon"> & {
    statuses?: Record<T, BuilderComponent>;
  };

/**
 * [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) Spinner component
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Spinner
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type SpinnerComponent<T extends string = string> = ModularComponent<
  SpinnerProps<T>
>;
