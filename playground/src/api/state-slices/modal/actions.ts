import { createAction } from "@reduxjs/toolkit";

export const openModal = createAction(
  "@@modal/OPEN_MODAL",
  (type: ModalType) => ({
    payload: { type: type },
  })
);

export const closeModal = createAction("@@modal/CLOSE_MODAL");
