import ADDITIONAL_EPICS from "api/state-slices/epics";
import ADDITIONAL_REDUCERS from "api/state-slices/reducers";
import ADDITIONAL_INITIAL_STATE from "api/state-slices/preloaded-state";

import { initStore as init, Config } from "@cianciarusocataldo/modular-engine";

/** Initialize Modular-app Redux store, using app.config.json parameters */
export const initStore = (CONFIG: Config) => {
  return init({
    CONFIG: CONFIG,
    epics: ADDITIONAL_EPICS,
    reducers: ADDITIONAL_REDUCERS,
    initialState: ADDITIONAL_INITIAL_STATE,
  });
};
