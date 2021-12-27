import { useTranslation } from "react-i18next";
import { I18N } from "../../app.config.json";

export const useCommonTranslation = () => {
  const { t } = useTranslation(I18N.NAMESPACES[0]);
  return t;
};
export const useHomePageTranslation = () => {
  const { t } = useTranslation(I18N.NAMESPACES[1]);
  return t;
};
