import { createAction } from "@reduxjs/toolkit";
import { ModalType } from "app/modals/types";

/** Open Modular-app modal, with selected content inside (from app/modals) */
export const openModal = createAction(
  "@@modal/OPEN_MODAL",
  (modal: ModalType) => ({
    payload: { type: modal },
  })
);

/** Close Modular-app modal */
export const closeModal = createAction("@@modal/CLOSE_MODAL");
