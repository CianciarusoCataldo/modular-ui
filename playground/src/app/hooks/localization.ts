import { useTranslation } from "react-i18next";

export const useCommonTranslations = () => {
  const { t } = useTranslation("common");
  return t;
};

export const useHomeTranslations = () => {
  const { t } = useTranslation("home");
  return t;
};

export const useInfoTranslations = () => {
  const { t } = useTranslation("info");
  return t;
};

export const useModalTranslations = () => {
  const { t } = useTranslation("modals");
  return t;
};

export const usePageTitlesTranlslations = () => {
  const { t } = useTranslation("page-titles");
  return t;
};
