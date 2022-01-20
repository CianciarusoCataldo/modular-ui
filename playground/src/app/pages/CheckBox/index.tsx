import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import { CheckBox, Label } from "modular-ui-preview";
import { useCommonTranslation } from "app/hooks/localization";
import AppPage from "app/components/molecules/AppPage";
import { driveWithDarkMode } from "@cianciarusocataldo/modular-engine";

export const CheckBoxWrapper = () => {
  return (
    <Demo
      label="CheckBox"
      props={{
        label: StringProp("CheckBox label"),
        className: StringProp(""),
        hide: BooleanProp(false),
        dark: BooleanProp(false),
        shadow: BooleanProp(true),
        value: BooleanProp(false),
        unstyled: BooleanProp(false),
      }}
    >
      {(props: any) => (
        <div className="flex flex-col items-center">
          <CheckBox {...props} />
        </div>
      )}
    </Demo>
  );
};

const CheckBoxPage = () => {
  const t = useCommonTranslation();
  const AppLabel = driveWithDarkMode(Label);

  return (
    <AppPage>
      <AppLabel className="text-4xl mt-12 mb-5 ml-3">{`${t("atoms")} - ${t(
        "component",
        { componentName: "CheckBox" }
      )}`}</AppLabel>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <CheckBoxWrapper />
      </div>
    </AppPage>
  );
};

export default CheckBoxPage;
