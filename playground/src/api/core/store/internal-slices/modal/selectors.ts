import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "api/core/types/store-types";

/**
 * Return the internal `modal` slice (if `REDUX.MODAL` is set to false, inside app.config.json,
 * a default slice state is returned)
 */
export const getModalView = createSelector(
  (state: RootState) => state.modal || { isVisible: false, type: null },
  (modal) => modal
);
