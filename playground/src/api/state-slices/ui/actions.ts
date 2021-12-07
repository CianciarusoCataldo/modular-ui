import { createAction } from "@reduxjs/toolkit";

export const openDrawer = createAction("@@ui/OPEN_DRAWER");
export const closeDrawer = createAction("@@ui/CLOSE_DRAWER");
export const changeLanguage = createAction(
  "@@ui/CHANGE_LANGUAGE",
  (language: SupportedLanguage) => ({
    payload: {
      language,
    },
  })
);

export const switchDarkMode = createAction(
  "@@ui/SWITCH_DARK_MODE",
  (language: SupportedLanguage) => ({
    payload: {
      language,
    },
  })
);
