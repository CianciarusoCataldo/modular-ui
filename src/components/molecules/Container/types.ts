import {
  BuilderComponent,
  CommonProps,
  ComponentWithChildren,
  ModularComponent,
} from "../../../utils/global";

/**
 * Modular-ui Container component props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Container
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type ContainerProps = ComponentWithChildren<
  BuilderComponent | BuilderComponent[]
> &
  CommonProps & {
    wrapper?: "div" | "header" | "footer";
    animated?: boolean;
  };

/**
 * Modular-ui Container component props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Container
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type ContainerComponent = ModularComponent<ContainerProps>;
