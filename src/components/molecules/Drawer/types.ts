import {
  BuilderComponent,
  CommonProps,
  ComponentWithChildren,
  ModularComponent,
} from "../../../utils/global";

/**
 * Modular-ui Drawer component props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Drawer
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type DrawerProps = CommonProps &
  ComponentWithChildren<BuilderComponent | BuilderComponent[]> & {
    /** Callback triggered on Drawer close */
    onClose?: () => void;

    /** Drawer position, relative to entire window */
    position?:
      | "right"
      | "left"
      | "top"
      | "bottom"
      | "top-left"
      | "top-right"
      | "bottom-left"
      | "bottom-right";
  };

/**
 * Modular-ui Drawer component
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Drawer
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type DrawerComponent = ModularComponent<DrawerProps>;
