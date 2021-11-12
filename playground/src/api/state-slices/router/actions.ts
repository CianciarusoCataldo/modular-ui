import { createAction } from "@reduxjs/toolkit";
import { goBack as goBackAction, push } from "redux-first-history";

export const goBack = () => goBackAction("");

export const requestRoute = (path: string) => push(path);

export const checkRoute = createAction(
  "@@router/CHECK_ROUTE",
  (isHomePage) => ({
    payload: {
      isHomePage,
    },
  })
);

export const locationChange = createAction("@@router/LOCATION_CHANGE");
