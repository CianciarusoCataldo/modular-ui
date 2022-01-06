import { createReducer } from "@reduxjs/toolkit";

import UI_ACTIONS from "./ui/reducer";
import MODAL_ACTIONS from "./modal/reducer";

import uiInitialState from "./ui/initial-state";
import modalInitialState from "./modal/initial-state";

/** Internal Modular-app reducers (it depends on app.config.json REDUX field) */
const INTERNAL_REDUCERS = {
  ui: createReducer(uiInitialState, (builder) => {
    UI_ACTIONS.forEach((reducerAction) =>
      builder.addCase(reducerAction.action, (state, action) =>
        reducerAction.callback(state, action)
      )
    );
  }),
  modal: createReducer(modalInitialState, (builder) => {
    MODAL_ACTIONS.forEach((reducerAction) =>
      builder.addCase(reducerAction.action, (state, action) =>
        reducerAction.callback(state, action)
      )
    );
  }),
};

export default INTERNAL_REDUCERS;
