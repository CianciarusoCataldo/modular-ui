import {
  BoxComponent,
  BuilderComponent,
  CommonProps,
  ComponentWithChildren,
} from "../../../utils/global";

/** Modal component props */
export type ModalProps = CommonProps &
  ComponentWithChildren<BuilderComponent | BuilderComponent[]> &
  Omit<BoxComponent, "value"> & {
    /** Modal title */
    title?: string;

    /** Callback triggered when modal is closed */
    onClose?: () => void;
  };
