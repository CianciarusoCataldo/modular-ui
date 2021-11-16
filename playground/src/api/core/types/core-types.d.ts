//Pre-loaded config
declare interface Config {
  APP_NAME: string;
  ROUTER: {
    BASENAME: string;
    ROUTES_PATHS: Record<RouteKey, string>;
  };
  I18N: {
    FALLBACK_LANGUAGE: string;
    SUPPORTED_LANGUAGES: string[];
    NAMESPACES: string[];
    DEFAULT_NAMESPACE: string;
    LOAD_PATH: string;
    DEFAULT_NAMESPACE: string;
  };
}

//General
declare interface RootState {
  router: RouterState;
  ui: UIState;
  config: ConfigState;
}

declare type StateSlice = keyof RootState;

declare interface RootAction {
  type: string;
  payload?: any;
  error?: boolean;
}

declare interface ReducerAction<T = any> {
  action: string;
  callback: (
    state: T,
    action: {
      type: string;
      payload?: any;
    }
  ) => T;
}
