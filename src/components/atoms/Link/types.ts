import {
  BuilderComponent,
  CommonProps,
  ComponentWithChildren,
  ModularComponent,
} from "../../../utils/global";

/**
 * [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) Link component props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/atoms/Link
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type LinkProps = CommonProps &
  ComponentWithChildren<BuilderComponent> & {
    /** Link URL */
    to: string;

    /**if true, the link will be opened in a new tab */
    newTab?: boolean;
  };

/**
 * [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) Link component
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/atoms/Link
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type LinkComponent = ModularComponent<LinkProps>;
