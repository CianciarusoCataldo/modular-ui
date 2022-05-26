import { TFunction, useTranslation } from "react-i18next";

import { useCommonTranslation } from "hooks/localization";

import { AllowedComponent, Table } from "modular-ui-preview";
import AppLabel from "../AppLabel";
import AppPage from "../AppPage";

export const ComponentPage = ({
  children,
  name: componentName,
  render,
  props,
  translations,
}: {
  children?: AllowedComponent | AllowedComponent[];
  render?: (t: TFunction) => AllowedComponent | AllowedComponent[];
  name: string;
  props?: string[][];
  translations?: boolean;
}) => {
  const t = useCommonTranslation();
  const { t: tComponent } = useTranslation(
    translations ? componentName.toLowerCase() : "common"
  );
  return (
    <AppPage>
      <AppLabel className="text-4xl mt-12 mb-5 ml-3">
        {t("component", { componentName })}
      </AppLabel>
      <div className="flex flex-col p-3 items-center">
        {children}
        {render && render(tComponent)}
        {props && <Table headers rows={props} />}
      </div>
    </AppPage>
  );
};
