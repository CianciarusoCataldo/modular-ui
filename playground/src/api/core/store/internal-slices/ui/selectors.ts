import { RootState } from "api/core/types/store-types";
import { createSelector } from "reselect";
import { UIState } from "./types";

/**
 * Return the internal `ui` slice (if `REDUX.UI` is set to false, inside app.config.json,
 * a default slice state is returned)
 */
export const getUIView = createSelector(
  (state: RootState): UIState =>
    state.ui || {
      isDrawerOpen: false,
      language: "en",
      isHomePage: false,
      darkMode: false,
    },
  (uiState) => uiState
);

/** Returns Modular-app drawer visibility */
export const isDrawerOpen = createSelector(
  getUIView,
  ({ isDrawerOpen }) => isDrawerOpen
);

/** Returns true if actual route is HOME_PAGE route, false otherwise */
export const isHomePage = createSelector(
  getUIView,
  ({ isHomePage }) => isHomePage
);

/** Returns actual i18next language */
export const getLanguage = createSelector(
  getUIView,
  ({ language }) => language
);

/** Returns true if dark mode is enabled, false otherwise */
export const isInDarkMode = createSelector(
  getUIView,
  ({ darkMode }) => darkMode
);
