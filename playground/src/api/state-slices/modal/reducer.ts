import { openModal, closeModal } from "./actions";

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
    callback: (state, _) => {
      return {
        ...state,
        isVisible: false,
        type: "EMPTY",
      };
    },
  },
];

export default REDUCER_ACTIONS;
