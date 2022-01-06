import { Reducer } from "@reduxjs/toolkit";

/** Custom additional reducers, loaded with internal ones(depending on app.config.json) */
const REDUCERS: Record<string, Reducer<any>> = {};

export default REDUCERS;
