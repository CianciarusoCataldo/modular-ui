import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import AppPage from "app/components/molecules/AppPage";
import { useCommonTranslation } from "app/hooks/localization";
import { Divider } from "modular-ui-preview";

export const DividerWrapper = () => (
  <Demo
    label="Divider"
    props={{
      className: StringProp(""),
      hide: BooleanProp(false),
      dark: BooleanProp(false),
      unstyled: BooleanProp(false),
    }}
  >
    {(props: any) => <Divider {...props} />}
  </Demo>
);

const DividerPage = () => {
  const t = useCommonTranslation();
  return (
    <AppPage>
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{`${t("atoms")} - ${t(
        "component",
        { componentName: "Divider" }
      )}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <DividerWrapper />
      </div>
    </AppPage>
  );
};

export default DividerPage;
