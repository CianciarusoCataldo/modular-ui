export interface Config {
  APP_NAME: string;
  REDUX: {
    MODAL: boolean;
    UI: boolean;
  };
  ROUTER: {
    BASENAME: string;
    HOME_PAGE: string;
    PAGES: Record<string, string>;
  };
  I18N: {
    FALLBACK_LANGUAGE: string;
    SUPPORTED_LANGUAGES: string[];
    NAMESPACES: string[];
    DEFAULT_NAMESPACE: string;
    LOAD_PATH: string;
    DEFAULT_NAMESPACE?: string;
    PAGES_NAMESPACE?: string;
    MODALS_NAMESPACE?: string;
  };
}
