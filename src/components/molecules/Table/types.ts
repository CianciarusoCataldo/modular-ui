import {
  BoxComponent,
  BuilderComponent,
  CommonProps,
  ModularComponent,
} from "../../../utils/global";

/**
 * [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) Table component props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Table
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type TableProps = CommonProps &
  Omit<BoxComponent, "value" | "icon"> & {
    /** if true, the first row will be used as headers (and not generic data) */
    headers?: boolean;

    /** Table rows */
    rows?: BuilderComponent[][];
  };

/**
 * [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) Table component
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Table
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type TableComponent = ModularComponent<TableProps>;
