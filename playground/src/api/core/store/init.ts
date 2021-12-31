import INITIAL_STATE from "api/constants/initial-state";
import REDUCERS from "./reducers";
import EPICS from "./epics";

import {
  combineReducers,
  configureStore,
  createReducer,
} from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
  });

export const initStore = (CONFIG: Config) => {
  let initialState = { ...INITIAL_STATE };
  initialState.config = {
    ...CONFIG,
    ROUTER: {
      ...CONFIG.ROUTER,
    },
  };
  const rootReducer = combineReducers({
    router: routerReducer,
    ...Object.fromEntries(
      Object.keys(REDUCERS).map((reducer, i) => [
        reducer as keyof typeof INITIAL_STATE,
        createReducer(initialState[reducer as StateSlice], (builder) => {
          REDUCERS[reducer as StateSlice]?.forEach((reducerAction) => {
            builder.addCase(reducerAction.action, (state, action) =>
              reducerAction.callback(state, action)
            );
          });
        }),
      ])
    ),
  });
  const epicMiddleware = createEpicMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: INITIAL_STATE,
    middleware: [epicMiddleware, routerMiddleware],
    devTools: process.env.NODE_ENV === "development",
  });

  epicMiddleware.run(combineEpics(...EPICS));
  const history = createReduxHistory(store);

  return { store, history };
};
