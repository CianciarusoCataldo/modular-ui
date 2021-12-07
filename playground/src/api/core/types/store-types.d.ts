//Modal
declare interface ModalState {
  isVisible: boolean;
  type: ModalType;
}

//Router
declare interface RouterState {
  location: {
    pathname: string;
    hash: string;
    search: string;
    state: string;
  };
  action: string;
}

//UI
declare interface UIState {
  darkMode: boolean;
  isDrawerOpen: boolean;
  language: SupportedLanguage;
  isHomePage: boolean;
}

//Config
declare type ConfigState = Config & {
  ROUTER: { ROUTES_MAP: Record<string, RouteKey> };
};
