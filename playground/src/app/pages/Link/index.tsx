import { Label, Link } from "modular-ui-preview";
import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import { useCommonTranslation } from "app/hooks/localization";
import AppPage from "app/components/molecules/AppPage";
import { driveWithDarkMode } from "@cianciarusocataldo/modular-engine";

export const LinkWrapper = () => (
  <Demo
    label="Link"
    props={{
      to: StringProp("https://github.com/CianciarusoCataldo/modular-ui"),
      className: StringProp(""),
      children: StringProp("Link label"),
      newTab: BooleanProp(true),
      hide: BooleanProp(false),
      dark: BooleanProp(false),
      unstyled: BooleanProp(false),
    }}
    rows={[
      ["to", "className", "children"],
      ["newTab", "hide", "dark", "unstyled"],
    ]}
  >
    {(props: any) => (
      <div className="m-auto flex flex-col items-center text-xl">
        <Link {...props} />
      </div>
    )}
  </Demo>
);

const LinkPage = () => {
  const t = useCommonTranslation();
  const AppLabel = driveWithDarkMode(Label);

  return (
    <AppPage>
      <AppLabel className="text-4xl mt-12 mb-5 ml-3">{`${t("atoms")} - ${t(
        "component",
        { componentName: "Link" }
      )}`}</AppLabel>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <LinkWrapper />
      </div>
    </AppPage>
  );
};

export default LinkPage;
