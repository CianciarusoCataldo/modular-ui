import {
  BooleanProp,
  Demo,
  SelectProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";

import { CodeBox } from "modular-ui-preview";
import { useCommonTranslation } from "app/hooks/localization";
import AppPage from "app/components/molecules/AppPage";

export const CodeBoxWrapper = () => {
  return (
    <Demo
      label="CodeBox"
      props={{
        value: StringProp("npm i @cianciarusocataldo/modular-ui"),
        label: StringProp("Codebox label"),
        className: StringProp(""),
        enhanced: BooleanProp(true),
        hide: BooleanProp(false),
        shadow: BooleanProp(true),
        dark: BooleanProp(false),
        unstyled: BooleanProp(false),
        environment: SelectProp({
          "Terminal (default)": "terminal",
          Javascript: "javascript",
          Python: "python",
        }),
      }}
      rows={[
        ["value", "enhanced", "environment"],
        ["className", "dark", "shadow"],
        ["hide", "unstyled", "label"],
      ]}
    >
      {(props: any) => {
        return <CodeBox {...props} />;
      }}
    </Demo>
  );
};

const CodeBoxPage = () => {
  const t = useCommonTranslation();
  return (
    <AppPage>
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{`${t(
        "molecules"
      )} - ${t("component", { componentName: "CodeBox" })}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <CodeBoxWrapper />
      </div>
    </AppPage>
  );
};

export default CodeBoxPage;
