import { setI18nLanguage } from "api/core/i18n/instance";

import { Epic } from "redux-observable";

import { filter, ignoreElements, tap, withLatestFrom } from "rxjs/operators";

import { changeLanguage } from "./actions";
import { updatePageTitle } from "api/helpers/ui-helper";
import { getConfig } from "../config/selectors";

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
