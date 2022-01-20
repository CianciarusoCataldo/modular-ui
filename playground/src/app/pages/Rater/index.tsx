import { Label, Rater } from "modular-ui-preview";
import {
  BooleanProp,
  Demo,
  NumberProp,
  SelectProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";
import { useCommonTranslation } from "app/hooks/localization";
import AppPage from "app/components/molecules/AppPage";
import { driveWithDarkMode } from "@cianciarusocataldo/modular-engine";

const RaterPage = () => {
  const t = useCommonTranslation();
  const AppLabel = driveWithDarkMode(Label);

  return (
    <AppPage>
      <AppLabel className="text-4xl mt-12 mb-5 ml-3">{`${t("molecules")} - ${t(
        "component",
        { componentName: "Rater" }
      )}`}</AppLabel>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <RaterWrapper />
      </div>
    </AppPage>
  );
};

export const RaterWrapper = () => (
  <Demo
    label="Rater"
    props={{
      label: StringProp("Rater label"),
      className: StringProp(""),
      hide: BooleanProp(false),
      dark: BooleanProp(false),
      shadow: BooleanProp(true),
      max: NumberProp(6),
      value: NumberProp(2),
      unstyled: BooleanProp(false),
      vertical: BooleanProp(false),
      type: SelectProp({
        Stars: "star",
        Circles: "circle",
      }),
    }}
    rows={[
      ["value", "max", "type", "vertical"],
      ["label", "className", "dark"],
      ["shadow", "unstyled", "hide"],
    ]}
  >
    {(props: any) => (
      <div className="flex flex-col items-center">
        <Rater {...props} />
      </div>
    )}
  </Demo>
);

export default RaterPage;
