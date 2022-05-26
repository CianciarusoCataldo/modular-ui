import {
  BooleanProp,
  Demo,
  SelectProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";

import { DEMO_COMMON_PROPS } from "app/constants/demo-props";

import { CodeBox } from "modular-ui-preview";
import { ComponentPage } from "app/components/ComponentPage";

const CodeBoxPage = () => (
  <ComponentPage
    name="CodeBox"
    translations
    render={(t) => {
      return (
        <Demo
          label="CodeBox"
          props={{
            value: StringProp("npm i @cianciarusocataldo/modular-ui"),
            label: StringProp("Codebox label"),
            enhanced: BooleanProp(true),
            environment: SelectProp({
              [t("props_environment", { context: "default" })]: "terminal",
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
      );
    }}
  />
);

export default CodeBoxPage;
