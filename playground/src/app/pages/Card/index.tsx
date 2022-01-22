import { Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { Card } from "modular-ui-preview";
import { ComponentPage } from "app/components/ComponentPage";
import { DEMO_COMMON_PROPS } from "app/constants/demo-props";

const CardPage = () => (
  <ComponentPage name="Card">
    <Demo
      label="Card"
      props={{
        label: StringProp("Card label"),
        header: StringProp("Card header"),
        body: StringProp("Card body"),
        footer: StringProp("Card footer"),
        ...DEMO_COMMON_PROPS,
      }}
      rows={[
        ["label", "header"],
        ["body", "footer"],
        ["className", "shadow", "dark", "hide", "unstyled"],
      ]}
      startColor="#999"
    >
      {(props: any) => (
        <div className="flex flex-col items-center">
          <Card {...props} />
        </div>
      )}
    </Demo>
  </ComponentPage>
);

export default CardPage;
