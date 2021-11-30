import { useTranslation } from "react-i18next";
import { I18N } from "../../app.config.json";

export const useHomePageTranslation = () => {
  const { t } = useTranslation(I18N.NAMESPACES[0]);
  return t;
};

export const useDropdownPageTranslation = () => {
  const { t } = useTranslation(I18N.NAMESPACES[1]);
  return t;
};

export const useCardPageTranslation = () => {
  const { t } = useTranslation(I18N.NAMESPACES[2]);
  return t;
};

export const useFormPageTranslation = () => {
  const { t } = useTranslation(I18N.NAMESPACES[3]);
  return t;
};

export const useButtonPageTranslation = () => {
  const { t } = useTranslation(I18N.NAMESPACES[4]);
  return t;
};

export const useLinkPageTranslation = () => {
  const { t } = useTranslation(I18N.NAMESPACES[5]);
  return t;
};
export const useModalPageTranslation = () => {
  const { t } = useTranslation(I18N.NAMESPACES[6]);
  return t;
};

export const useDividerPageTranslation = () => {
  const { t } = useTranslation(I18N.NAMESPACES[7]);
  return t;
};

export const useTableTranslation = () => {
  const { t } = useTranslation(I18N.NAMESPACES[8]);
  return t;
};

export const useInputPageTranslation = () => {
  const { t } = useTranslation(I18N.NAMESPACES[9]);
  return t;
};

export const useCheckboxPageTranslation = () => {
  const { t } = useTranslation(I18N.NAMESPACES[10]);
  return t;
};

export const useCodeBoxTranslation = () => {
  const { t } = useTranslation(I18N.NAMESPACES[11]);
  return t;
};

export const useCommonTranslation = () => {
  const { t } = useTranslation(I18N.NAMESPACES[12]);
  return t;
};
