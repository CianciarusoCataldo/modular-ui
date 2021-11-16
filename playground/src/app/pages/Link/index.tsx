import { Page, Link } from "modular-ui-preview";
import { Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import {
  useCommonTranslation,
  useLinkPageTranslation,
} from "app/hooks/localization";

export const LinkWrapper = () => (
  <Demo
    props={{
      label: StringProp("Link label"),
      className: StringProp(""),
    }}
  >
    {(props: any) => <Link {...props} />}
  </Demo>
);

const LinkPage = () => {
  const t = useLinkPageTranslation();
  const tCommon = useCommonTranslation();

  return (
    <Page>
      <p className="text-4xl mt-8 mb-5 ml-3 text-white">{`${tCommon(
        "atoms"
      )} - ${t("title")}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <LinkWrapper />
      </div>
    </Page>
  );
};

export default LinkPage;
