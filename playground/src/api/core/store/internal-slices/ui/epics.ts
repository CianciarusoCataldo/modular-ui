import { Epic } from "redux-observable";
import { RootAction, RootState } from "api/core/types/store-types";

import { filter, ignoreElements, tap, withLatestFrom } from "rxjs/operators";

import { toast } from "react-toastify";

import { setI18nLanguage } from "api/core/i18n/instance";

import { updatePageTitle } from "api/helpers/ui-helper";

import { changeLanguage, showToast } from "./actions";
import { getConfig } from "../config/selectors";

/** Actions dispatched when i18next language is changing */
export const languageChangeEpic: Epic<RootAction, RootAction, RootState> = (
  action$,
  state$
) => {
  return action$.pipe(
    filter(changeLanguage.match),
    withLatestFrom(state$),
    tap(([action, state]) => {
      setI18nLanguage(action.payload.language).then(() => {
        updatePageTitle(getConfig(state));
      });
    }),
    ignoreElements()
  );
};

/** Shows a custom toast notification */
export const showToastEpic: Epic<RootAction> = (action$) => {
  return action$.pipe(
    filter(showToast.match),
    tap((action) => {
      toast[action.payload.type || "info"](action.payload.message || "");
    }),
    ignoreElements()
  );
};
