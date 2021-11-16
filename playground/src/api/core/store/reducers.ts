import uiReducer from "api/state-slices/ui/reducer";

const REDUCERS_ACTIONS: Partial<Record<StateSlice, ReducerAction[]>> = {
  ui: uiReducer,
  config: [],
};

export default REDUCERS_ACTIONS;
