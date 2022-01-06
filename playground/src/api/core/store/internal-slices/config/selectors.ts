import { RootState } from "api/core/types/store-types";
import { createSelector } from "reselect";

/** Returns all `app.config.json` parameters, saved into the Redux state */
export const getConfig = createSelector(
  (state: RootState) => state.config,
  (config) => config
);

/** Returns `app.config.json` `ROUTER` parameters */
export const getRouterConfig = createSelector(
  getConfig,
  ({ ROUTER }) => ROUTER
);

/** Returns `app.config.json` `I18N` parameters */
export const geti18nConfig = createSelector(getConfig, ({ I18N }) => I18N);

/** Returns `app.config.json` `APP_NAME` parameter */
export const getAppName = createSelector(getConfig, ({ APP_NAME }) => APP_NAME);

/** Returns `app.config.json` `I18N SUPPORTED_LANGUAGES` parameter */
export const getLanguages = createSelector(
  geti18nConfig,
  ({ SUPPORTED_LANGUAGES }) => SUPPORTED_LANGUAGES
);

/** Returns `app.config.json` `ROUTER.BASENAME` parameter */
export const getAppBaseName = createSelector(
  getRouterConfig,
  (ROUTER) => ROUTER.BASENAME
);

/** Returns `app.config.json` `ROUTER.PAGES` parameters, combined with `ROUTER.BASENAME` parameter */
export const getPages = createSelector(
  getRouterConfig,
  ({ BASENAME, PAGES }) => {
    let pages: Record<string, string> = {};

    Object.keys(PAGES).forEach((page) => {
      pages[page] = `${BASENAME}${PAGES[page]}`;
    });

    return pages;
  }
);

/** Returns `app.config.json` `ROUTER.HOME_PAGE` parameter */
export const getHomePage = createSelector(
  getRouterConfig,
  ({ BASENAME, HOME_PAGE }) => `${BASENAME}${HOME_PAGE}`
);
