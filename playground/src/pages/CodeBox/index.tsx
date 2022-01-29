import {
  BooleanProp,
  Demo,
  SelectProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";

import { CodeBox } from "modular-ui-preview";
import { ComponentPage } from "app/components/ComponentPage";
import { DEMO_COMMON_PROPS } from "app/constants/demo-props";

const CodeBoxPage = () => (
  <ComponentPage name="CodeBox">
    <Demo
      label="CodeBox"
      props={{
        value: StringProp("npm i @cianciarusocataldo/modular-ui"),
        label: StringProp("Codebox label"),
        enhanced: BooleanProp(true),
        environment: SelectProp({
          "Terminal (default)": "terminal",
          Javascript: "javascript",
          Python: "python",
        }),
        ...DEMO_COMMON_PROPS,
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
  </ComponentPage>
);

export default CodeBoxPage;
