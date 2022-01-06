import { ReducerAction } from "api/core/types/store-types";
import { ModalState } from "./types";

import { closeModal, openModal } from "./actions";

/** Internal `modal` reducer actions */
const REDUCER_ACTIONS: ReducerAction<ModalState>[] = [
  {
    action: openModal.type,
    callback: (state, action) => ({
      ...state,
      isVisible: true,
      type: action.payload.type,
    }),
  },
  {
    action: closeModal.type,
    callback: (state) => ({
      ...state,
      type: null,
      isVisible: false,
    }),
  },
];

export default REDUCER_ACTIONS;
