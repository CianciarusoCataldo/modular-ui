import { Epic } from "redux-observable";
import { filter, map, withLatestFrom } from "rxjs/operators";

import i18n from "api/core/i18n/instance";

import { isActualRouteHomepage, updatePageTitle } from "api/helpers/ui-helper";
import { getAppName, getRoutesMap, getRoutesPaths } from "../config/selectors";
import { checkRoute, locationChange } from "./actions";

export const locationChangeEpic: Epic<RootAction, RootAction, RootState> = (
  action$,
  state$
) => {
  return action$.pipe(
    filter(locationChange.match),
    withLatestFrom(state$),
    map(([_, state]) => {
      if (i18n.isInitialized)
        updatePageTitle(getRoutesMap(state), getAppName(state));

      return checkRoute(isActualRouteHomepage(getRoutesPaths(state).HOME));
    })
  );
};
