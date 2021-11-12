import { createSelector } from "reselect";

export const getModalView = createSelector(
  (state: RootState) => state.modal,
  (modal) => modal
);

export const isModalVisible = createSelector(
  getModalView,
  ({ isVisible }) => isVisible
);
