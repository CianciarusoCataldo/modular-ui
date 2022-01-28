import { useCommonTranslation } from "app/hooks/localization";

import { AllowedComponent, Table } from "modular-ui-preview";
import AppLabel from "../AppLabel";
import AppPage from "../AppPage";

export const ComponentPage = ({
  children,
  name: componentName,
  props,
}: {
  children: AllowedComponent | AllowedComponent[];
  name: string;
  props?: string[][];
}) => {
  const t = useCommonTranslation();

  return (
    <AppPage>
      <AppLabel className="text-4xl mt-12 mb-5 ml-3">
        {t("component", { componentName })}
      </AppLabel>
      <div className="flex flex-col p-3 items-center">
        {children}
        {props && <Table headers rows={props} />}
      </div>
    </AppPage>
  );
};
