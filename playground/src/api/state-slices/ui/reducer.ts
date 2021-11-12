import {
  openDrawer,
  closeDrawer,
  changeLanguage,
} from "api/state-slices/ui/actions";
import { checkRoute } from "api/state-slices/router/actions";

const REDUCER_ACTIONS: ReducerAction<UIState>[] = [
  {
    action: openDrawer.type,
    callback: (state) => ({
      ...state,
      isDrawerOpen: true,
    }),
  },
  {
    action: closeDrawer.type,
    callback: (state) => ({
      ...state,
      isDrawerOpen: false,
    }),
  },
  {
    action: changeLanguage.type,
    callback: (state, action) => ({
      ...state,
      language: action.payload.language,
    }),
  },
  {
    action: checkRoute.type,
    callback: (state, action) => ({
      ...state,
      isHomePage: action.payload.isHomePage,
    }),
  },
];

export default REDUCER_ACTIONS;
