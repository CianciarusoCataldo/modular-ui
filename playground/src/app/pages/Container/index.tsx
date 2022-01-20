import { Container, Label } from "modular-ui-preview";
import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import { useCommonTranslation } from "app/hooks/localization";
import AppPage from "app/components/molecules/AppPage";
import { driveWithDarkMode } from "@cianciarusocataldo/modular-engine";

const ContainerPage = () => {
  const t = useCommonTranslation();
  const AppLabel = driveWithDarkMode(Label);

  return (
    <AppPage>
      <AppLabel className="text-4xl mt-12 mb-5 ml-3">{`${t(
        "molecules"
      )} - ${t("component", { componentName: "Container" })}`}</AppLabel>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <ContainerWrapper />
      </div>
    </AppPage>
  );
};

export const ContainerWrapper = () => (
  <Demo
    label="Container"
    props={{
      children: StringProp("Container content"),
      className: StringProp(""),
      hide: BooleanProp(false),
      dark: BooleanProp(false),
      shadow: BooleanProp(true),
      unstyled: BooleanProp(false),
      animated: BooleanProp(false),
    }}
  >
    {(props: any) => (
      <div className="flex flex-col items-center">
        <Container {...props} />
      </div>
    )}
  </Demo>
);

export default ContainerPage;
