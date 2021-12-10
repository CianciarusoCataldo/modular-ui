import { createSelector } from "reselect";

export const getUIView = createSelector(
  (state: RootState): UIState => state.ui,
  (uiState) => uiState
);

export const isDrawerOpen = createSelector(
  getUIView,
  ({ isDrawerOpen }) => isDrawerOpen
);

export const isHomePage = createSelector(
  getUIView,
  ({ isHomePage }) => isHomePage
);

export const getLanguage = createSelector(
  getUIView,
  ({ language }) => language
);

export const isInDarkMode = createSelector(
  getUIView,
  ({ darkMode }) => darkMode
);
