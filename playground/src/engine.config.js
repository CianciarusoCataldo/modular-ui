const engineConfig = {
  appName: "Modular-ui",
  redux: {
    modal: false,
    ui: true,
    epics: [],
    reducers: {},
    preload: {},
  },
  router: {
    basename: "/modular-ui",
    homePage: "/",
    pages: {
      Button: "/components/atoms/Button",
      Card: "/components/molecules/Card",
      Carousel: "/components/molecules/Carousel",
      CheckBox: "/components/atoms/CheckBox",
      CodeBox: "/components/atoms/CodeBox",
      Container: "/components/molecules/Container",
      Counter: "/components/molecules/Counter",
      Divider: "/components/atoms/Divider",
      Dropdown: "/components/molecules/Dropdown",
      Form: "/components/molecules/Form",
      Input: "/components/atoms/Input",
      Label: "/components/atoms/Label",
      Link: "/components/atoms/Link",
      Modal: "/components/atoms/Modal",
      Rater: "/components/molecules/Rater",
      Table: "/components/molecules/Table",
      Toggle: "/components/atoms/Toggle",
    },
  },
  i18n: {
    fallbackLanguage: "en",
    supportedLanguages: ["en", "it", "es", "fr", "de"],
    namespaces: ["overview", "common"],
    defaultNamespace: "common",
    loadPath: "/modular-ui/locales/{{lng}}/{{ns}}.json",
    pagesNamespace: "titles",
    modalsNamespace: "forms",
  },
};

export default engineConfig;
