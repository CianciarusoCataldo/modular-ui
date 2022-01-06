import { RootAction, RootState } from "api/core/types/store-types";

import { Epic } from "redux-observable";
import { filter, map, withLatestFrom } from "rxjs/operators";

import { isActualRouteHomepage, updatePageTitle } from "api/helpers/ui-helper";

import { checkRoute, locationChange } from "./actions";
import { getConfig, getHomePage } from "../config/selectors";

/** Standard actions dispatched on location change */
export const locationChangeEpic: Epic<RootAction, RootAction, RootState> = (
  action$,
  state$
) => {
  return action$.pipe(
    filter(locationChange.match),
    withLatestFrom(state$),
    map(([_, state]) => {
      updatePageTitle(getConfig(state));
      return checkRoute(isActualRouteHomepage(getHomePage(state)));
    })
  );
};