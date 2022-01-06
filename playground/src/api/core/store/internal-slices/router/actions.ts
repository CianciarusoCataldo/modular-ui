import { createAction } from "@reduxjs/toolkit";
import { goBack as goBackAction, push } from "redux-first-history";

/** Go back to previous route saved in history, if available (from `react-first-history` lib) */
export const goBack = () => goBackAction();

/** Change actual route (from `react-first-history` lib) */
export const requestRoute = (path: string) => push(path);

/** action dispatched everytime the actual route is changing (from `react-first-history` lib) */
export const locationChange = createAction("@@router/LOCATION_CHANGE");

/** Check if actual route is home page route */
export const checkRoute = createAction(
  "@@router/CHECK_ROUTE",
  (isHomePage) => ({
    payload: {
      isHomePage,
    },
  })
);
