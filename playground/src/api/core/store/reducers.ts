import uiReducer from "api/state-slices/ui/reducer";
import modalsReducer from "api/state-slices/modal/reducer";

const REDUCERS_ACTIONS: Partial<Record<StateSlice, ReducerAction[]>> = {
  ui: uiReducer,
  modal: modalsReducer,
  config: [],
};

export default REDUCERS_ACTIONS;
