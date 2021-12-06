import { Page, Link } from "modular-ui-preview";
import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import {
  useCommonTranslation,
  useLinkPageTranslation,
} from "app/hooks/localization";

export const LinkWrapper = () => (
  <Demo
    label="Link"
    props={{
      to: StringProp("https://github.com/CianciarusoCataldo/modular-ui"),
      className: StringProp(""),
      label: StringProp("Link label"),
      newTab: BooleanProp(false),
      hide: BooleanProp(false),
      dark: BooleanProp(false),
    }}
    rows={[
      ["to", "className", "label"],
      ["newTab", "hide", "dark"],
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
  const t = useLinkPageTranslation();
  const tCommon = useCommonTranslation();

  return (
    <Page>
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{`${tCommon(
        "atoms"
      )} - ${t("title")}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <LinkWrapper />
      </div>
    </Page>
  );
};

export default LinkPage;
