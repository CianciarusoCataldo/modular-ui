import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { CheckBox } from "modular-ui-preview";
import { ComponentPage } from "app/components/ComponentPage";
import { DEMO_COMMON_PROPS } from "app/constants/demo-props";

const CheckBoxPage = () => (
  <ComponentPage name="CheckBox">
    <Demo
      label="CheckBox"
      props={{
        label: StringProp("CheckBox label"),
        value: BooleanProp(false),
        ...DEMO_COMMON_PROPS,
      }}
    >
      {(props: any) => (
        <div className="flex flex-col items-center">
          <CheckBox {...props} />
        </div>
      )}
    </Demo>
  </ComponentPage>
);

export default CheckBoxPage;
