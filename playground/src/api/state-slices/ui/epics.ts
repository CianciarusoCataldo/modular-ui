import { setI18nLanguage } from "api/core/i18n/instance";

import { Epic } from "redux-observable";
import { toast } from "react-toastify";

import { filter, ignoreElements, tap, withLatestFrom } from "rxjs/operators";

import { changeLanguage, showToast } from "./actions";
import { updatePageTitle } from "api/helpers/ui-helper";
import { getAppName, getRoutesMap } from "../config/selectors";

export const languageChangeEpic: Epic<RootAction, RootAction, RootState> = (
  action$,
  state$
) => {
  return action$.pipe(
    filter(changeLanguage.match),
    withLatestFrom(state$),
    tap(([action, state]) => {
      setI18nLanguage(action.payload.language).then(() => {
        updatePageTitle(getRoutesMap(state), getAppName(state));
      });
    }),
    ignoreElements()
  );
};

export const showToastEpic: Epic<RootAction> = (action$) => {
  return action$.pipe(
    filter(showToast.match),
    tap((action) => {
      toast[action.payload.type || "info"](action.payload.message || "");
    }),
    ignoreElements()
  );
};
