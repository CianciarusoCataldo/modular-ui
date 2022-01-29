import { DEMO_COMMON_PROPS } from "app/constants/demo-props";

import OnIcon from "./on.svg";
import OffIcon from "./off.svg";

import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { Toggle } from "modular-ui-preview";
import { ComponentPage } from "app/components/ComponentPage";

const TogglePage = () => (
  <ComponentPage name="Toggle">
    <Demo
      label="Toggle"
      startColor="#999"
      props={{
        value: BooleanProp(true),
        "Custom icons": BooleanProp(false),
        label: StringProp("Label"),
        ...DEMO_COMMON_PROPS,
      }}
      rows={[
        ["value", "Custom icons", "label", "dark"],
        ["className", "shadow", "unstyled", "hide"],
      ]}
    >
      {(props: any, setProps: (props: any) => void) => {
        let actualProps = { ...props };
        delete actualProps["Custom icons"];
        if (props["Custom icons"]) {
          actualProps.onIcon = <img alt="" src={OnIcon} width={30} />;
          actualProps.offIcon = <img alt="" src={OffIcon} width={30} />;
        }
        return (
          <div className="flex flex-col items-center">
            <Toggle
              {...actualProps}
              onChange={() => setProps({ ...props, value: !props.value })}
            />
          </div>
        );
      }}
    </Demo>
  </ComponentPage>
);

export default TogglePage;
