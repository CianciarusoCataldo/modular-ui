import MODALS_INITIAL_STATE from "api/state-slices/modal/initial-state";
import ROUTER_INITIAL_STATE from "api/state-slices/router/initial-state";
import UI_INITIAL_STATE from "api/state-slices/ui/initial-state";

const INITIAL_STATE: Partial<RootState> = {
  router: ROUTER_INITIAL_STATE,
  ui: UI_INITIAL_STATE,
  modal: MODALS_INITIAL_STATE,
};

export default INITIAL_STATE;
