import {
  BoxComponent,
  BuilderComponent,
  CommonProps,
  ComponentWithChildren,
  ModularComponent,
} from "../../../utils/global";

/**
 * [Modular-ui]({@link https://cianciarusocataldo.github.io/modular.ui}) Card component props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Card
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type CardProps = CommonProps &
  ComponentWithChildren &
  Omit<BoxComponent, "value"> & {
    /** Card header content */
    header?: BuilderComponent;

    /** Card body content */
    body?: BuilderComponent;

    /** Card footer content */
    footer?: BuilderComponent;
  };

/**
 * Modular-ui Card component
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Card
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type CardComponent = ModularComponent<CardProps>;
