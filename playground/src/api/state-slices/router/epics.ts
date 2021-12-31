import { Epic } from "redux-observable";
import { filter, map, withLatestFrom } from "rxjs/operators";

import { isActualRouteHomepage, updatePageTitle } from "api/helpers/ui-helper";
import { getConfig, getPages } from "../config/selectors";
import { checkRoute, locationChange } from "./actions";

export const locationChangeEpic: Epic<RootAction, RootAction, RootState> = (
  action$,
  state$
) => {
  return action$.pipe(
    filter(locationChange.match),
    withLatestFrom(state$),
    map(([_, state]) => {
      updatePageTitle(getConfig(state));
      return checkRoute(isActualRouteHomepage(getPages(state).Home.path));
    })
  );
};
