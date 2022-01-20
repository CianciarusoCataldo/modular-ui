import { Button, Label } from "modular-ui-preview";
import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import { useCommonTranslation } from "app/hooks/localization";
import AppPage from "app/components/molecules/AppPage";
import { driveWithDarkMode } from "@cianciarusocataldo/modular-engine";

const ButtonPage = () => {
  const t = useCommonTranslation();
  const AppLabel = driveWithDarkMode(Label);

  return (
    <AppPage>
      <AppLabel className="text-4xl mt-12 mb-5 ml-3">{`${t(
        "atoms"
      )} - ${t("component", { componentName: "Button" })}`}</AppLabel>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <ButtonWrapper />
      </div>
    </AppPage>
  );
};

export const ButtonWrapper = () => (
  <Demo
    label="Button"
    props={{
      children: StringProp("Button content"),
      className: StringProp(""),
      hide: BooleanProp(false),
      dark: BooleanProp(false),
      shadow: BooleanProp(true),
      disabled: BooleanProp(false),
      unstyled: BooleanProp(false),
    }}
  >
    {(props: any) => (
      <div className="flex flex-col items-center">
        <Button onClick={() => alert("Button clicked")} {...props} />
      </div>
    )}
  </Demo>
);

export default ButtonPage;
