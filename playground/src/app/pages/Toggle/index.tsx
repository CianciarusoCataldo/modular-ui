import { Toggle } from "modular-ui-preview";
import {
  BooleanProp,
  Demo,
  SelectProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";
import { useCommonTranslation } from "app/hooks/localization";
import AppPage from "app/components/molecules/AppPage";

const TogglePage = () => {
  const t = useCommonTranslation();

  return (
    <AppPage>
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{`${t("atoms")} - ${t(
        "component",
        { componentName: "Toggle" }
      )}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <ToggleWrapper />
      </div>
    </AppPage>
  );
};

export const ToggleWrapper = () => (
  <Demo
    label="Toggle"
    startColor="#999"
    props={{
      value: SelectProp({ on: "on", off: "off" }),
      className: StringProp(""),
      hide: BooleanProp(false),
      dark: BooleanProp(false),
      shadow: BooleanProp(true),
      unstyled: BooleanProp(false),
      "Custom icon": BooleanProp(false),
      label: StringProp("Label"),
    }}
    rows={[
      ["value", "Custom icon", "label", "dark"],
      ["className", "shadow", "unstyled", "hide"],
    ]}
  >
    {(props: any) => {
      let actualProps = { ...props };
      delete actualProps["Custom icon"];
      if (props["Custom icon"]) {
        actualProps.icon = (
          <div
            className="bg-gray-200"
            style={{ height: "30px", width: "30px" }}
          />
        );
      }
      return (
        <div className="flex flex-col items-center">
          <Toggle {...actualProps} />
        </div>
      );
    }}
  </Demo>
);

export default TogglePage;
