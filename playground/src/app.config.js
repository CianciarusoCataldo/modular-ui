import { lazy } from "react";

import { DrawerContent, DrawerLogo } from "contents/drawer";
import FooterContent from "contents/footer";
import HeaderContent from "contents/header";
import App from "app/App";

const appConfig = {
  pagesRendering: (route) => lazy(() => import(`pages/${route}`)),
  modals: {},
  content: App,
  darkMode: true,
  useQueryParams: true,
  preloader: () => <div className="preloader" />,
  header: HeaderContent,
  footer: FooterContent,
  drawer: {
    content: DrawerContent,
    logo: DrawerLogo,
    elements: [],
  },
};

export default appConfig;
