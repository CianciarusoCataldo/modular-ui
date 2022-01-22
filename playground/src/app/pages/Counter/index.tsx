import {
  BooleanProp,
  Demo,
  NumberProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";

import { Counter } from "modular-ui-preview";
import { ComponentPage } from "app/components/ComponentPage";
import { DEMO_COMMON_PROPS } from "app/constants/demo-props";

const CounterPage = () => (
  <ComponentPage name="Counter">
    <Demo
      label="Counter"
      startColor="#C3BBBB"
      props={{
        value: NumberProp(0),
        label: StringProp("Counter label"),
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
          <Counter {...props} />
        </div>
      )}
    </Demo>
  </ComponentPage>
);

export default CounterPage;
