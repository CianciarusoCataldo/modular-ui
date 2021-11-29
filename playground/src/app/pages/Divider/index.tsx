import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import {
  useCommonTranslation,
  useDividerPageTranslation,
} from "app/hooks/localization";
import { Page, Divider } from "modular-ui-preview";

export const DividerWrapper = () => (
  <Demo
    label="Divider"
    props={{ className: StringProp(""), hide: BooleanProp(false) }}
  >
    {(props: any) => <Divider {...props} />}
  </Demo>
);

const DividerPage = () => {
  const t = useDividerPageTranslation();
  const tCommon = useCommonTranslation();
  return (
    <Page>
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{`${tCommon(
        "atoms"
      )} - ${t("title")}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <DividerWrapper />
      </div>
    </Page>
  );
};

export default DividerPage;
