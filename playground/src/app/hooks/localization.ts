import { useTranslation } from "react-i18next";

export const usePageTitlesTranlslations = () => {
  const { t } = useTranslation("page-titles");
  return t;
};
