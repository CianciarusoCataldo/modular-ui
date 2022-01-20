import { Epic } from "redux-observable";
import { switchDarkMode } from "@cianciarusocataldo/modular-engine";

import { filter, ignoreElements, tap, withLatestFrom } from "rxjs";
import classNames from "classnames";

/** Custom additional epics, loaded with internal ones(depending on app.config.json) */
const EPICS: Epic[] = [
  (action$, state$) => {
    return action$.pipe(
      filter(switchDarkMode.match),
      withLatestFrom(state$),
      tap({
        next: ([_, state]) => {
          window.document.body.className = classNames({
            dark: state.ui.darkMode,
            light: !state.ui.darkMode,
          });
          window.document.body.style.background = "";
        },
      }),
      ignoreElements()
    );
  },
];

export default EPICS;
