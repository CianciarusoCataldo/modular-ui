import { Button } from "modular-ui-preview";
import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import { ComponentPage } from "app/components/ComponentPage";
import { DEMO_COMMON_PROPS } from "app/constants/demo-props";

const ButtonPage = () => (
  <ComponentPage name="Button">
    <Demo
      label="Button"
      props={{
        children: StringProp("Button content"),
        disabled: BooleanProp(false),
        ...DEMO_COMMON_PROPS,
      }}
    >
      {(props: any) => (
        <div className="flex flex-col items-center">
          <Button onClick={() => alert("Button clicked")} {...props} />
        </div>
      )}
    </Demo>
  </ComponentPage>
);

export default ButtonPage;
