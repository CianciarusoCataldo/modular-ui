import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { Input } from "modular-ui-preview";
import { ComponentPage } from "app/components/ComponentPage";
import { DEMO_COMMON_PROPS } from "app/constants/demo-props";

const InputPage = () => (
  <ComponentPage name="Input">
    <Demo
      label="Input"
      startColor="#C3BBBB"
      props={{
        value: StringProp("Input value"),
        label: StringProp("Input label"),
        placeholder: StringProp("placeholder"),
        readOnly: BooleanProp(false),
        ...DEMO_COMMON_PROPS,
      }}
      rows={[
        ["value", "readOnly", "placeholder"],
        ["unstyled", "className", "label"],
        ["shadow", "dark", "hide"],
      ]}
    >
      {(props: any) => (
        <div className="flex flex-col items-center">
          <Input {...props} />
        </div>
      )}
    </Demo>
  </ComponentPage>
);

export default InputPage;
