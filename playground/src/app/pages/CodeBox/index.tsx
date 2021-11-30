import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import { CodeBox, Page } from "modular-ui-preview";
import {
  useCommonTranslation,
  useCodeBoxTranslation,
} from "app/hooks/localization";

export const CodeBoxWrapper = () => {
  return (
    <Demo
      label="CodeBox"
      props={{
        code: StringProp("Code box content"),
        enhanced: BooleanProp(true),
      }}
    >
      {(props: any) => <CodeBox {...props} />}
    </Demo>
  );
};

const CodeBoxPage = () => {
  const t = useCodeBoxTranslation();
  const tCommon = useCommonTranslation();
  return (
    <Page>
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{`${tCommon(
        "molecules"
      )} - ${t("title")}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <CodeBoxWrapper />
      </div>
    </Page>
  );
};

export default CodeBoxPage;
