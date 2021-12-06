import {
  BooleanProp,
  Demo,
  SelectProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";

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
        code: StringProp("npm i @cianciarusocataldo/modular-ui"),
        enhanced: BooleanProp(true),
        dark: BooleanProp(false),
        hide: BooleanProp(false),
        environment: SelectProp({
          "Terminal (default)": "terminal",
          Javascript: "javascript",
          Python: "python",
        }),
      }}
    >
      {(props: any) => {
        return <CodeBox {...props} />;
      }}
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
