import { UIState } from "./types";

/** Internal `ui` slice initial state */
const UI_INITIAL_STATE: UIState = {
  isDrawerOpen: false,
  language: navigator.language.split("-")[0],
  isHomePage: true,
  darkMode: true,
};

export default UI_INITIAL_STATE;
