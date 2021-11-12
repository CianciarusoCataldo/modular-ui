import { useModalTranslations } from "app/hooks/localization";

const EmptyForm = () => {
  const t = useModalTranslations();

  return <div>{t("EMPTY", { context: "body" })}</div>;
};

export default EmptyForm;
