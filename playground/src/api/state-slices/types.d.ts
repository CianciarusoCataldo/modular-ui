import REDUCERS from "./reducers";

export type AdditionalStateSlice = keyof typeof REDUCERS;
export type AdditionalState = Record<AdditionalStateSlice, any>;
