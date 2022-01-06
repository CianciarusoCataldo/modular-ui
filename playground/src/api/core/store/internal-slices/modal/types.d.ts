import { ModalType } from "app/modals/types";

export interface ModalState {
  isVisible: boolean;
  type: ModalType | null;
}
