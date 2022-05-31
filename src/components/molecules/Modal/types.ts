import {
  BoxComponent,
  BuilderComponent,
  CommonProps,
  ComponentWithChildren,
  ModularComponent,
} from "../../../utils/global";

/**
 * Modular-ui Modal component props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Modal
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type ModalProps = CommonProps &
  ComponentWithChildren<BuilderComponent | BuilderComponent[]> &
  Omit<BoxComponent, "value" | "icon" | "label"> & {
    /** Modal title */
    title?: string;

    /** Callback triggered when modal is closed */
    onClose?: () => void;
  };

/**
 * Modular-ui Modal component
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Modal
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type ModalComponent = ModularComponent<ModalProps>;
