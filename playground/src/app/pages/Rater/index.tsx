import { DEMO_COMMON_PROPS } from "app/constants/demo-props";

import {
  BooleanProp,
  Demo,
  NumberProp,
  SelectProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";

import { Rater } from "modular-ui-preview";
import { ComponentPage } from "app/components/ComponentPage";

const RaterPage = () => (
  <ComponentPage name="Rater">
    <Demo
      label="Rater"
      props={{
        label: StringProp("Rater label"),
        max: NumberProp(6),
        value: NumberProp(2),
        vertical: BooleanProp(false),
        type: SelectProp({
          Stars: "star",
          Circles: "circle",
        }),
        ...DEMO_COMMON_PROPS,
      }}
      rows={[
        ["value", "max", "type", "vertical"],
        ["label", "className", "dark"],
        ["shadow", "unstyled", "hide"],
      ]}
    >
      {(props: any) => (
        <div className="flex flex-col items-center">
          <Rater {...props} />
        </div>
      )}
    </Demo>
  </ComponentPage>
);

export default RaterPage;
