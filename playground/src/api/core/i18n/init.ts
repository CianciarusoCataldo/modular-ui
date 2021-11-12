import i18n from "./instance";
import { initReactI18next } from "react-i18next";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";

import { updatePageTitle } from "api/helpers/ui-helper";
import { computeRoutePaths, computeRoutesMap } from "api/helpers/route-helper";

export const initi18n = (CONFIG: Config) =>
  i18n
    .use(initReactI18next) // bind react-i18next to the instance
    .use(ChainedBackend)
    .init({
      fallbackLng: CONFIG.I18N.FALLBACK_LANGUAGE,
      supportedLngs: CONFIG.I18N.SUPPORTED_LANGUAGES,
      lng: navigator.language.split("-")[0],
      preload: [CONFIG.I18N.FALLBACK_LANGUAGE],
      debug: false,
      backend: {
        backends: [LocalStorageBackend, HttpBackend],
        backendOptions: [
          {
            expirationTime:
              process.env.NODE_ENV === "production"
                ? 7 * 24 * 60 * 60 * 1000 // 7 days
                : 0,
          },
          {
            loadPath: `${CONFIG.ROUTER.BASENAME}${CONFIG.I18N.LOAD_PATH}`,
          },
        ],
      },
      ns: CONFIG.I18N.NAMESPACES,
      defaultNS: CONFIG.I18N.DEFAULT_NAMESPACE,
      interpolation: {
        escapeValue: false,
      },
      react: { useSuspense: false },
    })
    .then(() => {
      updatePageTitle(
        computeRoutesMap(computeRoutePaths(CONFIG)),
        CONFIG.APP_NAME
      );
    });
