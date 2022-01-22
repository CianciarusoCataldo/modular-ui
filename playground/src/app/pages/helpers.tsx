import { AppLabel, AppPage } from "api/predefined/components";
import { useCommonTranslation } from "app/hooks/localization";
import { AllowedComponent } from "modular-ui-preview";

export const ComponentPage = ({
  Component,
  name: componentName,
}: {
  Component: AllowedComponent;
  name: string;
}) => {
  const t = useCommonTranslation();

  return (
    <AppPage>
      <AppLabel className="text-4xl mt-12 mb-5 ml-3">
        {t("component", { componentName })}
      </AppLabel>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        {Component}
      </div>
    </AppPage>
  );
};
