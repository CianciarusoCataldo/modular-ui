import { AdditionalStateSlice } from "./types";

/** Custom additional preloaded state, loaded with internal initial state(depending on app.config.json) */
const PRELOADED_STATE: Record<AdditionalStateSlice, any> = {};

export default PRELOADED_STATE;
