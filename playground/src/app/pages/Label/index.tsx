import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { Label } from "modular-ui-preview";
import { useCommonTranslation } from "app/hooks/localization";
import AppPage from "app/components/molecules/AppPage";
import { driveWithDarkMode } from "@cianciarusocataldo/modular-engine";

export const LabelWrapper = () => {
  return (
    <Demo
      label="Label"
      props={{
        children: StringProp("Label content"),
        className: StringProp(""),
        hide: BooleanProp(false),
        shadow: BooleanProp(false),
        dark: BooleanProp(false),
        unstyled: BooleanProp(false),
      }}
      rows={[
        ["children", "dark", "shadow"],
        ["className", "hide", "unstyled"],
      ]}
    >
      {(props: any) => {
        return <Label {...props} />;
      }}
    </Demo>
  );
};

const LabelPage = () => {
  const t = useCommonTranslation();
  const AppLabel = driveWithDarkMode(Label);
  return (
    <AppPage>
      <AppLabel className="text-4xl mt-12 mb-5 ml-3">{`${t(
        "atoms"
      )} - ${t("component", { componentName: "Label" })}`}</AppLabel>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <LabelWrapper />
      </div>
    </AppPage>
  );
};

export default LabelPage;
