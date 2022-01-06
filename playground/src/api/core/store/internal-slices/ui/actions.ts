import { createAction } from "@reduxjs/toolkit";

/** Open Modular-app drawer */
export const openDrawer = createAction("@@ui/OPEN_DRAWER");

/** Close Modular-app drawer */
export const closeDrawer = createAction("@@ui/CLOSE_DRAWER");

/** Change i18next localization language */
export const changeLanguage = createAction(
  "@@ui/CHANGE_LANGUAGE",
  (language) => ({
    payload: {
      language,
    },
  })
);

/** Switch UI dark mode to on/off */
export const switchDarkMode = createAction("@@ui/SWITCH_DARK_MODE");

/** Show a custom toast notification (using `react-toastify` lib) */
export const showToast = createAction(
  "@@ui/SHOW_TOAST",
  (message?: string, type?: ToastKey) => ({
    payload: {
      message: message,
      type: type as ToastKey,
    },
  })
);
